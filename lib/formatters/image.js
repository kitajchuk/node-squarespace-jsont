/*!
 *
 * Formatter: image
 * Returns the render for an image
 *
 * @usage: {item|image}
 *
 */
module.exports = function ( val, args, ctx ) {
    var focalPoint;

    if (val.mediaFocalPoint) {
      focalPoint = val.mediaFocalPoint.x + ',' + val.mediaFocalPoint.y;
    }

    return '<noscript><img src="' + val.assetUrl + '"  alt="' + val.filename + '" /></noscript><img alt="' + val.filename + '" class="' + (args[0] ? args[0] : 'thumb-image') + '" ' + (val.title ? 'alt="' + val.title + '" ' : '') + ' data-image="' + val.assetUrl + '" data-src="' + val.assetUrl + '" data-image-dimensions="' + val.originalSize + '" data-image-focal-point="' + focalPoint  + '" data-load="false" data-image-id="' + val.id + '" data-type="image">';
};