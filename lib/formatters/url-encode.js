/*!
 *
 * Formatter: url-encode
 * Returns an encoded url string
 *
 * @usage: {@|url-encode}
 *
 */
module.exports = function ( val, args, ctx ) {
    return encodeURI( encodeURIComponent( val ) );
};