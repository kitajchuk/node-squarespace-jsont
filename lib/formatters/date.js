/*!
 *
 * Formatter: date
 * Returns a formatted date string
 *
 * @usage: {publishOn|date `format`}
 *
 */
module.exports = function ( val, args, ctx ) {
    // Divide by 1000 since phpjs accounts for this:
    // PHP API expects UNIX timestamp (auto-convert to int)
    return require( "phpjs" ).strftime( args, (parseInt( val, 10 ) / 1000) );
};