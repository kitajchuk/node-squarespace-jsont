/*!
 *
 * Formatter: like-button
 * Returns a like button...
 *
 * @usage: {@|like-button}
 *
 */
module.exports = function ( val, args, ctx ) {
    var ret = "";

    ret += '<span class="sqs-simple-like" data-item-id="' + val.id + '" data-like-count="' + val.likeCount + '">';
    ret +=     '<span class="like-icon"></span>';
    ret +=     '<span class="like-count"></span>';
    ret += '</span>';

    return ret;
};