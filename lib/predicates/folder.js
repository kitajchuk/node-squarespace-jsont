/*!
 *
 * Predicate: folder
 * Evaluates collections folder
 *
 * @usage: {.folder?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( (data.collection && data.collection.folder) || data.folder ) ? true : false;
};