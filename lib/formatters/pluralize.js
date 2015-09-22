/*!
 *
 * Formatter: pluralize
 * Returns a pluralized string...
 *
 * @usage: {@|pluralize}
 *
 */
module.exports = function ( val, args, ctx ) {
    var pluralizer = "s";

    if ( args && args.length > 1 ) {
        pluralizer = ( val > 0 ) ? args[ 1 ] : args[ 0 ];

    } else if ( args && args.length ) {
        pluralizer = args[ 0 ];
    }

    return ( val > 0 ) ? pluralizer : "";
};