/*!
 *
 * Formatter: slugify
 * Returns a string url in standard slug format
 *
 * @usage: {title|slugify}
 *
 */
module.exports = function ( val, args, ctx ) {
    return require( "slug" )( val.toLowerCase() );
};