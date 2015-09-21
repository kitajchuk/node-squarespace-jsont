/*!
 *
 * Squarespace formatters.
 *
 * http://jsont.squarespace.com/
 * http://developers.squarespace.com/json-formatters/
 *
 */
var defaultFormatters = [
        "html",
        "htmltag",
        "html-attr-value",
        "str",
        "raw",
        "AbsUrl",
        "plain-url"
    ],
    formatters = {
        "count":                          require( "./count" ),
        "date":                           require( "./date" ),
        "timesince":                      require( "./timesince" ),
        "item-classes":                   require( "./item-classes" ),
        "image":                          require( "./image" ),
        "image-meta":                     require( "./image-meta" ),
        "json":                           require( "./json" ),
        "json-pretty":                    require( "./json-pretty" ),
        "slugify":                        require( "./slugify" ),
        "url-encode":                     require( "./url-encode" ),
        "htmlattr":                       require( "./htmlattr" ),
        "htmltag":                        require( "./htmltag" ),
        "activate-twitter-links":         require( "./activate-twitter-links" ),
        "safe":                           require( "./safe" ),
        "social-button":                  require( "./social-button" ),
        "social-button-inline":           require( "./social-button-inline" ),
        "comments":                       require( "./comments" ),
        "comment-link":                   require( "./comment-link" ),
        "comment-count":                  require( "./comment-count" ),
        "like-button":                    require( "./like-button" ),
        "product-price":                  require( "./product-price" ),
        "product-status":                 require( "./product-status" ),
        "product-checkout":               require( "./product-checkout" ),
        "pluralize":                      require( "./pluralize" ),
        "smartypants":                    require( "./smartypants" )
    };



module.exports = function ( formatter ) {
    // Only run if formatter is NOT a JSONT default internal
    var splits = formatter.split( " " );

    if ( defaultFormatters.indexOf( formatter ) === -1 ) {
        // Wrapper function for passing along to correct formatter
        return function ( string, context ) {
            var ret = false,
                fn = formatters[ splits[ 0 ] ];

            if ( typeof fn === "function" ) {
                ret = fn( string, [].join.call( splits.slice( 1 ), " " ), context );
            }

            return ret;
        };
    }
};