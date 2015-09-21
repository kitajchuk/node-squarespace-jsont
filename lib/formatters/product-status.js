/*!
 *
 * Formatter: product-status
 * Returns a product status block...
 *
 * @usage: {@|product-status}
 *
 */
module.exports = function ( val, args, ctx ) {
    var isSoldOut = true;

    for ( var i = val.variants.length; i--; ) {
        if ( val.variants[ i ].qtyInStock !== 0 ) {
            isSoldOut = false;
            break;
        }
    }

    if ( isSoldOut ) {
        return '<div class="product-mark sold-out">sold out</div>';
    }
};