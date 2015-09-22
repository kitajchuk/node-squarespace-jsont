/*!
 *
 * Predicate: even
 * Evaluates a value as even
 *
 * @usage: {@|even?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return (ctx._LookUpStack( args[ 0 ] ) % 2 == 0);
};