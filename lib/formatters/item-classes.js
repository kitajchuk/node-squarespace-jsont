/*!
 *
 * Formatter: item-classes
 * Returns a formatted className string for an item
 *
 * @usage: {@|item-classes}
 *
 */
module.exports = function ( val, args, ctx ) {
    var classes = 'hentry';

    if ( val.promotedBlockType ) {
        classes += ' promoted promoted-block-' + val.promotedBlockType;
    }

    if ( val.categories ) {
        classes += val.categories.map(function ( value ) {
            return ' category-' + require( "slug" )( value.toLowerCase() );
        }).join(' ');
    }

    if ( val.tags ) {
        classes += val.tags.map(function ( value ) {
            return ' tag-' + require( "slug" )( value.toLowerCase() );
        }).join(' ');
    }

    if ( val.starred ) {
        classes += ' featured';
    }

    if ( val.structuredContent ) {
        if ( val.structuredContent.onSale ) {
            classes += ' on-sale';
        }
    }

    classes += ' author-' + require( "slug" )( val.author.displayName.toLowerCase() )
    classes += ' post-type-' + require( "slug" )( val.recordTypeLabel.toLowerCase() );
    classes += ' article-index-' + ctx._LookUpStack( '@index' );

    return classes;
};