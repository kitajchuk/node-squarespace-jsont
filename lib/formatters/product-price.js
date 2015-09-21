/*!
 *
 * Formatter: product-price
 * Returns a product price block...
 *
 * @usage: {@|product-price}
 *
 */
module.exports = function ( val, args, ctx ) {
    var price = ("" + (val.variants[ 0 ].price / 100));
        price = price.split( "." );

    if ( !price[ 1 ] ) {
        price[ 1 ] = "00";

    } else if ( price[ 1 ].length === 1 ) {
        price[ 1 ] = (price[ 1 ] + "0");
    }

    price = price.join( "." );

    return '<div class="product-price"><span class="sqs-money-native">' + price + '</span></div>';
};