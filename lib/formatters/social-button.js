/*!
 *
 * Formatter: social-button
 * Returns a social button...
 *
 * @usage: {@|social-button}
 *
 */
module.exports = function ( val, args, ctx ) {
    return '<div class="squarespace-social-buttons button-style" data-system-data-id="' + val.systemDataId + '" data-asset-url="' + val.assetUrl + '" data-record-type="' + val.recordType + '" data-full-url="' + val.fullUrl + '" data-title="' + val.title + '"></div>';
};