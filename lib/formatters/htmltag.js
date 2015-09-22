/*!
 *
 * Formatter: htmltag
 * Returns an html tag escaped string
 *
 * @usage: {@|htmltag}
 *
 */
module.exports = function ( val, args, ctx ) {
    return require( "../jsontemplate" ).HtmlTagEscape( val );
};