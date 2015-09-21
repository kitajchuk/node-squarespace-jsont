/*!
 *
 * Predicate: collection
 * Evaluates collections collection
 *
 * @usage: {@|collection?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return ( data.collection ) ? true : false;
};