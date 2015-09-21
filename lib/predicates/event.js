/*!
 *
 * Predicate: event
 * Evaluates collections event
 *
 * @usage: {@|event?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return ( data.recordTypeLabel === "event" ) ? true : false;
};