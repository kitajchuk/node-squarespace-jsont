/*!
 *
 * Formatter: comment-link
 * Returns a comment-link block...
 *
 * @usage: {@|comment-link}
 *
 */
module.exports = function ( val, args, ctx ) {
    return '<a href="' + val.fullUrl + '" class="sqs-comment-link sqs-disqus-comment-link" data-id="' + val.id + '"></a>';
};