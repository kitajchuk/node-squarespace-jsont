/*!
 *
 * Predicate: index
 * Evaluates collections index
 *
 * @usage: {.index?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( (data.collection && data.collection.typeName === "index") || data.typeName === "index" ) ? true : false;
};