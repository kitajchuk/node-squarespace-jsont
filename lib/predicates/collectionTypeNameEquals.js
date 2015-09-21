/*!
 *
 * Predicate: collectionTypeNameEquals
 * Evaluates collections typeName
 *
 * @usage: {@|collectionTypeNameEquals? "foo"}
 *
 */
module.exports = function ( data, ctx, arg ) {
    arg = String( arg.replace( /"|'/g, "" ) );

    return (data.typeName && data.typeName === arg || false);
};