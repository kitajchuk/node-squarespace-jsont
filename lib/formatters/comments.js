/*!
 *
 * Formatter: comments
 * Returns a comments block...
 *
 * @usage: {@|comments}
 *
 */
module.exports = function ( val, args, ctx ) {
    //return '<div class="squarespace-comments" id="disqus_thread"></div>';

    /**
     *
     * XMLHttpRequest cannot load
     * https://XXX.squarespace.com/api/comment/GetComments?targetId=XXX&targetType=1&since=&page=1&sortBy=2
     * No 'Access-Control-Allow-Origin' header is present on the requested resource.
     * Origin 'http://localhost:XXXX' is therefore not allowed access.
     *
     */

    return "[comments?]";
};