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
        "collectionTypeNameEquals?":     require( "./collectionTypeNameEquals" )
    };



module.exports = function ( predicate ) {
    // Only run if predicate is NOT a JSONT default internal
    if ( defaultPredicates.indexOf( predicate ) === -1 ) {
        // Wrapper function for passing along to correct predicate
        return function ( data, context ) {
            var rPred = /\?$/,
                split = predicate.split( " " ),
                pred = split[ 0 ],
                arg1 = split[ 1 ],
                arg2 = split[ 2 ],
                ret = false,
                fn = predicates[ pred ];

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