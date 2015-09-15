/*!
 *
 * Squarespace predicates.
 *
 */
// http://jsont.squarespace.com/
// http://jsont.squarespace.com/scoping-example/
// http://developers.squarespace.com/quick-reference/
var rQuotes = /"|'/g,
    // Sourced from https://code.jquery.com/
    isNumeric = function ( obj ) {
        return !Array.isArray( obj ) && obj - parseFloat( obj ) >= 0;
    },
    getLookupArg = function ( ctx, arg ) {
        var get = ctx.get( arg ),
            lookup = ctx._LookUpStack( arg ),
            lookupIsNumeric = isNumeric( lookup ),
            getIsNumeric = isNumeric( get );

        if ( (lookup !== undefined) || lookupIsNumeric ) {
            arg = lookup;

        } else if ( (get !== undefined) || getIsNumeric ) {
            arg = get;
        }

        return arg;
    },
    jsonTemplate = require( "./jsontemplate" ),
    jsontPredicates = [
        "singular",
        "plural",
        "singular?",
        "plural?",
        "Debug?"
    ],
    sqsPredicates = {
        "main-image?": function ( data, ctx, arg ) {
            var ret = false;

            // 0.1 => A collection
            // 0.2 => A collection item
            if ( (data.mainImage && data.mainImage.systemDataOrigin === "USER_UPLOAD") || (data.systemDataOrigin === "USER_UPLOAD") ) {
                ret = true;
            }

            return ret;
        },
        "excerpt?": function ( data, ctx, arg ) {
            return ( data.excerpt ) ? true : false;
        },
        "comments?": function ( data, ctx, arg ) {
            return ( data.comments ) ? true : false;
        },
        "even?": function ( data, ctx, arg ) {
            return (ctx._LookUpStack( arg ) % 2 == 0);
        },
        "odd?": function ( data, ctx, arg ) {
            return !(ctx._LookUpStack( arg ) % 2 == 0);
        },
        "equal?": function ( data, ctx, arg1, arg2 ) {
            var ret = false;

            // Special Case
            // {.equal? typeName "collection"}
            // {.equal? title "collection"}
            // {...and so on...}
            // Cannot use `collection` string with the lookup stack.
            // It will return the {collection object} rather than a lookup value.
            if ( String( arg2.replace( rQuotes, "" ) ) === "collection" ) {
                arg1 = getLookupArg( ctx, arg1 );

                ret = ( arg1 == arg2 );

            // Use Cases
            // {.equal? foo.bar "baz"}
            // {.equal? foo "bar"}
            // {.equal? @index 5}
            // {.equal? "foo" foo.bar}
            // {... and so on...}
            } else {
                // One of the args is a string literal
                if ( rQuotes.test( arg1 ) ) {
                    arg1 = String( arg1.replace( rQuotes, "" ) );
                    arg2 = ( ctx._LookUpStack( arg2 ) || ctx.get( arg2 ) );

                } else if ( rQuotes.test( arg2 ) ) {
                    arg2 = String( arg2.replace( rQuotes, "" ) );
                    arg1 = ( ctx._LookUpStack( arg1 ) || ctx.get( arg1 ) );

                // Just make sure we don't mess up numeric values
                } else {
                    if ( !isNumeric( arg1 ) ) {
                        arg1 = getLookupArg( ctx, arg1 );
                    }

                    if ( !isNumeric( arg2 ) ) {
                        arg2 = getLookupArg( ctx, arg2 );
                    }
                }

                ret = ( arg1 == arg2 );
            }

            return ret;
        },
        "collection?": function ( data, ctx, arg ) {
            return ( data.collection ) ? true : false;
        },
        "external-link?": function ( data, ctx, arg ) {
            return ( data.externalLink ) ? true : false;
        },
        "folder?": function ( data, ctx, arg ) {
            return ( data.items ) ? true : false;
        },
        "location?": function ( data, ctx, arg ) {
            return ( data.location ) ? true : false;
        },
        "event?": function ( data, ctx, arg ) {
            return ( data.recordTypeLabel === "event" ) ? true : false;
        },
        "disqus?": function ( data, ctx, arg ) {
            return false;
        },
        "video?": function ( data, ctx, arg ) {
            return false;
        },
        "collectionTypeNameEquals?": function ( data, ctx, arg ) {
            arg = String( arg.replace( rQuotes, "" ) );

            return (data.typeName && data.typeName === arg || false);
        }
        //promote[blockName]?
    };

module.exports = function ( predicate ) {
    // Only run if predicate is NOT a JSONT default internal
    if ( jsontPredicates.indexOf( predicate ) === -1 ) {
        // Wrapper function for passing along to correct predicate
        return function ( data, context ) {
            var rPred = /\?$/,
                split = predicate.split( " " ),
                pred = split[ 0 ],
                arg1 = split[ 1 ],
                arg2 = split[ 2 ],
                ret = false,
                fn = sqsPredicates[ pred ];

            // {.if ...}
            if ( !rPred.test( pred ) ) {
                ret = context.get( predicate );

            } else if ( typeof fn === "function" ) {
                ret = fn( data, context, arg1, arg2 );
            }

            return ret;
        };
    }
};
