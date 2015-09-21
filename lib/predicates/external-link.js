/*!
 *
 * Predicate: external-link
 * Evaluates collections external-link
 *
 * @usage: {@|external-link?}
 *
 */
module.exports = function ( data, ctx, arg ) {
    return ( data.externalLink ) ? true : false;
};