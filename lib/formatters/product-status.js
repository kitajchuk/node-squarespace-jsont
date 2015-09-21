/*!
 *
 * Formatter: product-status
 * Returns a product status block...
 *
 * @usage: {@|product-status}
 *
 */
module.exports = function ( val, args, ctx ) {
    var ret = "";

    if ( val.variants && val.variants[ 0 ] && val.variants[ 0 ].qtyInStock === 0 ) {
        ret = '<div class="product-mark sold-out">sold out</div>';
    }

    return ret;
};