/*!
 *
 * Formatter: json-pretty
 * Returns object JSON representation formatted
 *
 * @usage: {collection|json-pretty}
 *
 */
module.exports = function ( val, args, ctx ) {
    return JSON.stringify( val, null, 4 );
};