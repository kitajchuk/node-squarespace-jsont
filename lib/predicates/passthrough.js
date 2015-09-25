/*!
 *
 * Predicate: passthrough
 * Evaluates collections passthrough
 *
 * @usage: {.passthrough?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.passthrough ) ? true : false;
};