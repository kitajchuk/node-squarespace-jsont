/*!
 *
 * Predicate: odd
 * Evaluates a value as odd
 *
 * @usage: {@|odd?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return !require( "./even" )( data, ctx, arg );
};