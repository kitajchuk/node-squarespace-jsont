/*!
 *
 * Formatter: social-button-inline
 * Returns a social button...
 *
 * @usage: {@|social-button-inline}
 *
 */
module.exports = function ( val, args, ctx ) {
    return '<div class="squarespace-social-buttons inline-style" data-system-data-id="' + val.systemDataId + '" data-asset-url="' + val.assetUrl + '" data-record-type="' + val.recordType + '" data-full-url="' + val.fullUrl + '" data-title="' + val.title + '"></div>';
};