/*!
 *
 * Predicate: disqus
 * Evaluates collections disqus
 *
 * @usage: {.disqus?}
 *
 */
module.exports = function ( data, ctx, args ) {
    // The only place `disqus` appears in data is here:
    // websiteSettings.disqusShortname
    // So, not really sure how to use this at the item level.
    return false;
};