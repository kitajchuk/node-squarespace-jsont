/*!
 *
 * Predicate: collectionTypeNameEquals
 * Evaluates collections typeName
 *
 * @usage: {@|collectionTypeNameEquals? "foo"}
 *
 */
module.exports = function ( data, ctx, args ) {
    var typeName = String( args[ 0 ].replace( /"|'/g, "" ) );

    return (data.typeName && data.typeName === typeName || false);
};