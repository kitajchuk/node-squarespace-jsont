/*!
 *
 * Predicate: comments
 * Evaluates collections comments
 *
 * @usage: {@|comments?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.comments ) ? true : false;
};