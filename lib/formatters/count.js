/*!
 *
 * Formatter: count
 * Returns the length of a collection
 *
 * @usage: {items|count}
 *
 */
module.exports = function ( val, args, ctx ) {
    return val.length;
};