/*!
 *
 * Formatter: json
 * Returns object JSON representation
 *
 * @usage: {collection|json}
 *
 */
module.exports = function ( val, args, ctx ) {
    return JSON.stringify( val );
};