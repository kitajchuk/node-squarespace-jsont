/*!
 *
 * Formatter: timesince
 * Returns a formatted date string for `time since date`
 *
 * @usage: {publishOn|timesince}
 *
 */
module.exports = function ( val, args, ctx ) {
    return require( "moment" )( val ).fromNow();
};