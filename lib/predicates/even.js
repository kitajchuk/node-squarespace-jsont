/*!
 *
 * Predicate: even
 * Evaluates a value as even
 *
 * @usage: {@|even?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return (ctx._LookUpStack( arg ) % 2 == 0);
};