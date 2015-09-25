/*!
 *
 * Predicate: main-image
 * Evaluates collections mainImage
 *
 * @usage: {.main-image?}
 *
 */
module.exports = function ( data, ctx, args ) {
    var ret = false;

    // 0.1 => A collection
    // 0.2 => A collection item
    if ( (data.mainImage && data.mainImage.systemDataOrigin === "USER_UPLOAD") || (data.systemDataOrigin === "USER_UPLOAD") ) {
        ret = true;
    }

    return ret;
};