/*!
 *
 * Predicate: excerpt
 * Evaluates collections excerpt
 *
 * @usage: {.excerpt?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.excerpt ) ? true : false;
};