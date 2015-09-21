/*!
 *
 * Predicate: folder
 * Evaluates collections folder
 *
 * @usage: {@|folder?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return ( data.items ) ? true : false;
};