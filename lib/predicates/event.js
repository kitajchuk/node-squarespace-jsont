/*!
 *
 * Predicate: event
 * Evaluates collections event
 *
 * @usage: {.event?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.recordTypeLabel === "event" ) ? true : false;
};