import { Component, createFactory, PropTypes } from 'react';
import { blockFactory } from 'rebem';
import ReactCSSTransitionGroupClass from 'react-addons-css-transition-group';
import ProductDescription from '#Product/Description';
import ProductImage from '#Product/Image';
import ProductQuantity from '#Product/QuantitySelect';
import ProductPrice from '#Product/Price';

const ReactCSSTransitionGroup = createFactory(ReactCSSTransitionGroupClass);
const Block = blockFactory('cart-products');

class CartProducts extends Component {

    renderHeadColumns() {
        const { items } = this.props;

        return [
            Block({
                mods: { order: '1st' },
                elem: 'head-col',
                tag: 'th'
            }, `${items.length} items`),
            Block({
                mods: { order: '2nd' },
                elem: 'head-col',
                tag: 'th'
            }, ' '),
            Block({
                mods: { order: '3rd' },
                elem: 'head-col',
                tag: 'th'
            }, 'Item Price'),
            Block({
                mods: { order: '4th' },
                elem: 'head-col',
                tag: 'th'
            }, 'Quantity'),
            Block({
                mods: { order: '5th' },
                elem: 'head-col',
                tag: 'th'
            }, ' ')
        ];
    }

    renderHeader() {
        return Block({
            elem: 'header',
            tag: 'thead'
        }, Block({
            elem: 'row',
            tag: 'tr'
        }, ...this.renderHeadColumns()));
    }
    renderBody() {
        const TBody = props => Block({
            elem: 'tbody',
            tag: 'tbody'
        }, props.children);

        return ReactCSSTransitionGroup(
            {
                transitionName: 'product-item',
                transitionAppearTimeout: 200,
                transitionEnterTimeout: 200,
                transitionLeaveTimeout: 400,
                transitionAppear: true,
                component: TBody
            },
            this.renderItems()
        );
    }
    renderItems() {
        const { items } = this.props;

        return items.map((product) => Block({
            elem: 'item',
            tag: 'tr',
            key: product.sku
        }, ...this.renderItem(product)));
    }
    renderItem(product) {
        const {
            link,
            image,
            name,
            stockStatus,
            branch,
            size,
            price,
            oldPrice,
            sale,
            availableQuanities,
            quantity,
            sku
        } = product;

        return [
            Block({
                mods: { order: '1st' },
                elem: 'col',
                tag: 'td'
            }, ProductImage({ link, image, name })),
            Block(
                {
                    mods: { order: '2nd' },
                    elem: 'col',
                    tag: 'td'
                },
                ProductDescription({ name, stockStatus, branch, size }),
                Block({
                    elem: 'move-to-wishlist',
                    tag: 'a',
                    onClick: () => {
                        this.props.handleAddItemToWishlist(product);
                    }
                }, 'Move to wish list')
            ),
            Block({
                mods: { order: '3rd' },
                elem: 'col',
                tag: 'td'
            }, ProductPrice({ price, oldPrice, sale })),
            Block({
                mods: { order: '4th' },
                elem: 'col',
                tag: 'td'
            }, ProductQuantity({ availableQuanities, quantity, sku })),
            Block({
                mods: { order: '5th' },
                elem: 'col',
                tag: 'td'
            }, Block({
                tag: 'span',
                elem: 'remove-item',
                onClick: () => {
                    this.props.handleRemoveItem(sku);
                }
            }))
        ];
    }
    render() {
        return Block(
            {
                tag: 'table'
            },
            this.renderHeader(),
            this.renderBody()
        );
    }
}
CartProducts.displayName = 'CartProducts';

CartProducts.defaultProps = {
    items: []
};

CartProducts.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            branch: PropTypes.string,
            size: PropTypes.string,
            stockStatus: PropTypes.string,
            price: PropTypes.string.isRequired,
            oldPrice: PropTypes.string,
            sale: PropTypes.number,
            availableQuanities: PropTypes.arrayOf(PropTypes.number).isRequired,
            quantity: PropTypes.number.isRequired,
            sku: PropTypes.string.isRequired
        })
    ),
    handleRemoveItem: PropTypes.func.isRequired,
    handleAddItemToWishlist: PropTypes.func.isRequired
};
export default CartProducts;
