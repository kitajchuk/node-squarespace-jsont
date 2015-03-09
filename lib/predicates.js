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
            arg1 = ("" + arg1.replace( rQuotes, "" ));
            arg2 = ("" + arg2.replace( rQuotes, "" ));

            arg1 = !isNumeric( arg1 ) ? (ctx._LookUpStack( arg1 ) || ctx.get( arg1 ) || arg1) : arg1;
            arg2 = !isNumeric( arg2 ) ? (ctx._LookUpStack( arg2 ) || ctx.get( arg2 ) || arg2) : arg2;

            return (arg1 == arg2 || arg1 == ctx.get( arg2 ));
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
            arg = arg.replace( rQuotes, "" );

            return (("" + data.collection.typeName) === ("" + arg));
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