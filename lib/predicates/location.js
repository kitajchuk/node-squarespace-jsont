/*!
 *
 * Predicate: location
 * Evaluates collections location
 *
 * @usage: {@|location?}
 *
 */
module.exports = function ( data, ctx, args ) {
    // All items have default location info:
    // mapLat
    // mapLng
    // markerLat
    // markerLng

    // Custom location info adds extra fields:
    // addressTitle
    // addressLine1
    // addressLine2
    // addressCountry

    // Assume that any 1 of these additional fields means item has a location
    return ( data.location.addressTitle || data.location.addressLine1 || data.location.addressLine2 || data.location.addressCountry ) ? true : false;
};