/*!
 *
 * Predicate: external-link
 * Evaluates collections external-link
 *
 * @usage: {@|external-link?}
 *
 */
module.exports = function ( data, ctx, args ) {
    return ( data.externalLink ) ? true : false;
};