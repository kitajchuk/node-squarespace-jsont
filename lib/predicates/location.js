/*!
 *
 * Predicate: location
 * Evaluates collections location
 *
 * @usage: {@|location?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.location ) ? true : false;
};