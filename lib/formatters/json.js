/*!
 *
 * Formatter: json
 * Returns object JSON representation
 *
 * @usage: {@|json}
 *
 */
module.exports = function ( val, args, ctx ) {
    return JSON.stringify( val );
};