/*!
 *
 * Predicate: odd
 * Evaluates a value as odd
 *
 * @usage: {@|odd?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return !require( "./even" )( data, ctx, args );
};