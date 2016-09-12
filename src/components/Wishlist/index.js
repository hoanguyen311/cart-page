import { Component, createFactory, PropTypes } from 'react';
import { blockFactory } from 'rebem';
import ProductImage from '#Product/Image';
import ProductDescription from '#Product/Description';
import ProductPrice from '#Product/Price';
import LazButton from '#Button';

const Block = blockFactory('wishlist');

class Wishlist extends Component {
    renderTitle() {
        const count = this.props.items.length;

        return Block({
            elem: 'title',
            tag: 'h3'
        }, 'My Wishlists', ' ', Block({
            elem: 'items-count',
            tag: 'span'
        }, `(${count} items)`));
    }
    renderBody() {
        if (!this.props.items.length) {
            return Block({
                elem: 'no-item',
                tag: 'p'
            }, 'No items in your wishlist');

        }

        return Block({
            elem: 'body'
        }, Block({
            elem: 'products',
            tag: 'table'
        }, Block({
            elem: 'tbody',
            tag: 'tbody'
        }, this.renderItems())));
    }
    renderItems() {

        return this.props.items.map((item) =>
            Block({
                elem: 'item',
                tag: 'tr',
                key: item.sku
            }, ...this.renderItem(item))
        );

    }
    renderItem(item) {

        const {
            image,
            link,
            name,
            size,
            price,
            oldPrice,
            sale
        } = item;

        return [
            Block({
                elem: 'col',
                tag: 'td',
                mods: {
                    order: '1st'
                }
            }, ProductImage({ image, link, name })),
            Block({
                elem: 'col',
                tag: 'td',
                mods: {
                    order: '2nd'
                }
            }, ProductDescription({ name, size })),
            Block(
                {
                    elem: 'col',
                    tag: 'td',
                    mods: {
                        order: '3rd'
                    }
                },
                ProductPrice({ price, oldPrice, sale }),
                Block({ elem: 'add-to-cart' },
                LazButton({ text: 'Add to cart', onClick: () => {
                    this.props.handleAddItem(item);
                } })
            ))
        ];
    }
    render() {
        return Block(null,
            this.renderTitle(),
            this.renderBody()
        );
    }
}
Wishlist.displayName = 'Wishlist';

Wishlist.defaultProps = {
    items: []
};
Wishlist.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            stockStatus: PropTypes.string,
            size: PropTypes.string,
            price: PropTypes.string.isRequired,
            sku: PropTypes.string.isRequired,
            oldPrice: PropTypes.string,
            sale: PropTypes.number
        })
    ),
    handleAddItem: PropTypes.func.isRequired
};

export default Wishlist;
