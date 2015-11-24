/*!
 *
 * Squarespace predicates.
 *
 * http://jsont.squarespace.com/
 * http://jsont.squarespace.com/scoping-example/
 * http://developers.squarespace.com/quick-reference/
 *
 */
var defaultPredicates = [
        "singular",
        "plural",
        "singular?",
        "plural?",
        "Debug?"
    ],
    predicates = {
        "main-image?":                   require( "./main-image" ),
        "excerpt?":                      require( "./excerpt" ),
        "comments?":                     require( "./comments" ),
        "even?":                         require( "./even" ),
        "odd?":                          require( "./odd" ),
        "equal?":                        require( "./equal" ),
        "collection?":                   require( "./collection" ),
        "external-link?":                require( "./external-link" ),
        "folder?":                       require( "./folder" ),
        "location?":                     require( "./location" ),
        "event?":                        require( "./event" ),
        "disqus?":                       require( "./disqus" ),
        "video?":                        require( "./video" ),
        "collectionTypeNameEquals?":     require( "./collectionTypeNameEquals" ),
        "image?":                        require( "./image" ),
        "passthrough?":                  require( "./passthrough" ),
        "index?":                        require( "./index-predicate" )
    };



module.exports = function ( arg ) {
    var index = arg.indexOf( " " ),
        predicate = null,
        args = null;

    if ( index === -1 ) {
        predicate = arg;
        args = [];

    } else {
        predicate = arg.substr( 0, index );

        // Clean predicate out of args now
        arg = arg.replace( predicate, "" ).replace( /^\s+|\s+$/g, "" );

        // Filter and normalize the arguments list
        args = arg.split( (/\"/.test( arg ) ? /\"(.*?)\"/g : /\s/g) ).filter(function ( el ) {
            var tmp = el.replace( /\s/g, "" );

            return ( tmp !== "" );
        });
    }

    // Only run if predicate is NOT a JSONT default internal
    if ( defaultPredicates.indexOf( predicate ) === -1 ) {
        // Wrapper function for passing along to correct predicate
        return function ( data, context ) {
            var func = predicates[ predicate ],
                ret = false;

            // Capture {.if} conditions
            if ( !/\?$/.test( predicate ) ) {
                ret = context.get( arg );

            } else if ( typeof func === "function" ) {
                // Normalize `args` as an Array excluding `predicate`
                ret = func( data, context, args );
            }

            return ret;
        };
    }
};