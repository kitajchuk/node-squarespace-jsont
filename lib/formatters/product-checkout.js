/*!
 *
 * Formatter: product-checkout
 * Returns a product checkout block...
 *
 * @usage: {@|product-checkout}
 *
 */
module.exports = function ( val, args, ctx ) {
    var ret = "";

    ret += '<div class="product-quantity-input" data-item-id="' + val.id + '">';
    ret +=     '<div class="quantity-label">Quantity:</div>';
    ret +=     '<input size="4" max="9999" min="1" value="1" type="number" step="1">';
    ret += '</div>';
    ret += '<div class="sqs-add-to-cart-button-wrapper">';
    ret +=     '<div class="sqs-add-to-cart-button sqs-suppress-edit-mode sqs-editable-button" data-collection-id="' + val.collectionId + '" data-item-id="' + val.id + '" data-original-label="' + val.customAddButtonText + '">';
    ret +=         '<div class="sqs-add-to-cart-button-inner">';
    ret +=             val.customAddButtonText;
    ret +=         '</div>';
    ret +=     '</div>';
    ret += '</div>';

    return ret;
};