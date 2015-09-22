/*!
 *
 * Formatter: activate-twitter-links
 * Returns a string with links activated
 *
 * @usage: {@|activate-twitter-links}
 *
 */
module.exports = function ( val, args, ctx ) {
    return val.replace( /(^|\s)@(\w+)/g, "$1<a href=\"http://twitter.com/$2\" target=\"_blank\">@$2</a>" );
};