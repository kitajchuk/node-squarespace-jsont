/*!
 *
 * Predicate: location
 * Evaluates collections location
 *
 * @usage: {@|location?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return ( data.location ) ? true : false;
};