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



module.exports = function ( arg ) {
    var index = arg.indexOf( " " ),
        formatter = null,
        args = null;

    if ( index === -1 ) {
        formatter = arg;
        args = [];

    } else {
        formatter = arg.substr( 0, index );
        args = arg.substr( index + 1 ).split( " " );
    }

    // Test unique case on original arg:
    // pluralize/It depends/They depend
    // http://jsont.squarespace.com/#Pluralize
    if ( /^pluralize\//.test( arg ) ) {
        formatter = "pluralize";
        args = arg.split( "/" ).slice( 1 );
    }

    // Only run if formatter is NOT a JSONT default internal
    if ( defaultFormatters.indexOf( formatter ) === -1 ) {
        // Wrapper function for passing along to correct formatter
        return function ( string, context ) {
            var func = formatters[ formatter ],
                ret = false;

            if ( typeof func === "function" ) {
                // Normalize `args` as an Array excluding `formatter`
                ret = func( string, args, context );
            }

            return ret;
        };
    }
};