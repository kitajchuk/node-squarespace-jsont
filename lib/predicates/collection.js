/*!
 *
 * Predicate: collection
 * Evaluates collections collection
 *
 * @usage: {@|collection?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.collection ) ? true : false;
};