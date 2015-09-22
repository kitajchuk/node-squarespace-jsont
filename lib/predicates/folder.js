/*!
 *
 * Predicate: folder
 * Evaluates collections folder
 *
 * @usage: {@|folder?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.items ) ? true : false;
};