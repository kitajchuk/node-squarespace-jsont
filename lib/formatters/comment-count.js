/*!
 *
 * Formatter: comment-count
 * Returns a comment-count block...
 *
 * @usage: {@|comment-count}
 *
 */
module.exports = function ( val, args, ctx ) {
    var ret = "[comment-count?]";

    if ( !val.commentCount ) {
        ret = "No Comments";

    } else if ( val.commentCount === 1 ) {
        ret = "1 Comment";

    } else {
        ret = val.commentCount + " Comments";
    }

    return ret;
};