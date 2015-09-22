/*!
 *
 * Formatter: image-meta
 * Returns the render for an images meta data
 *
 * @usage: {@|image-meta}
 *
 */
module.exports = function ( val, args, ctx ) {
    var focalPoint;

    if (val.mediaFocalPoint) {
      focalPoint = val.mediaFocalPoint.x + ',' + val.mediaFocalPoint.y;
    }

    return 'data-src="' + val.assetUrl + '" data-image="' + val.assetUrl + '" data-image-dimensions="' + val.originalSize + '" data-image-focal-point="' + focalPoint  + '" alt="' + val.filename + '"';
};