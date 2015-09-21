/*!
 *
 * Predicate: excerpt
 * Evaluates collections excerpt
 *
 * @usage: {@|excerpt?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return ( data.excerpt ) ? true : false;
};