/*!
 *
 * Predicate: lessThanOrEqual
 * Evaluates a value to be greater than another
 *
 * @usage: {.lessThanOrEqual? @index 2}
 *
 */
var util = require( "../util" );


module.exports = function ( data, ctx, args ) {
    args = util.getArgsProcessed( args, ctx );

    return ( args[ 0 ] <= args[ 1 ] );
};