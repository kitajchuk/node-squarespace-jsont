/*!
 *
 * Predicate: video
 * Evaluates collections video
 *
 * @usage: {@|video?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.recordTypeLabel === "video" ) ? true : false;
};