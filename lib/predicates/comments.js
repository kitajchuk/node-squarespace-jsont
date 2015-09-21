/*!
 *
 * Predicate: comments
 * Evaluates collections comments
 *
 * @usage: {@|comments?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return ( data.comments ) ? true : false;
};