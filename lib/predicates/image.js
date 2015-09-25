/*!
 *
 * Predicate: image
 * Evaluates collections images
 *
 * @usage: {.image?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.recordTypeLabel === "image" ) ? true : false;
};