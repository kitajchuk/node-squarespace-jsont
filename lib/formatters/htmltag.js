/*!
 *
 * Formatter: htmltag
 * Returns an html tag escaped string
 *
 * @usage: {excerpt|htmltag}
 *
 */
module.exports = function ( val, args, ctx ) {
    return require( "../jsontemplate" ).HtmlTagEscape( val );
};