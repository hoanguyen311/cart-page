import { Component, createFactory, PropTypes } from 'react';
import { blockFactory } from 'rebem';
import OrderSummaryClass from '~/components/OrderSummary';
import CartProductsClass from '~/components/CartProducts';
import ModalClass from '~/components/WishlistModal';
import WishlistClass from '~/components/Wishlist';
import CartButtonClass from '~/components/Button';
import './styles.less';
import ReactCSSTransitionGroupClass from 'react-addons-css-transition-group';

const OrderSummary = createFactory(OrderSummaryClass);
const CartProducts = createFactory(CartProductsClass);
const Modal = createFactory(ModalClass);
const Wishlist = createFactory(WishlistClass);
const CartButton = createFactory(CartButtonClass);
const Block = blockFactory('cart-page');
const ReactCSSTransitionGroup = createFactory(ReactCSSTransitionGroupClass);

class App extends Component {
    constructor(props) {
        super(...props);
        this.handleShowWishlist = this.handleShowWishlist.bind(this);
    }
    static displayName = 'App'
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        showWishlist: PropTypes.bool.isRequired,
        handleShowWishlist: PropTypes.func.isRequired
    }
    static defaultProps = {
        loading: false,
        showWishlist: false
    }
    componentDidMount() {
        this.props.loadData();
    }
    renderProducts() {
        return Block({
            elem: 'products'
        }, CartProducts(), Block({
            elem: 'wishlist-popup-trigger',
            tag: 'a',
            onClick: this.handleShowWishlist
        }, 'Add more item from wishlist'));
    }
    handleShowWishlist() {
        this.props.handleShowWishlist();
    }
    renderSummaryBlock() {
        return Block({
            elem: 'order-summary'
        }, OrderSummary(), CartButton({
            text: 'Proceed to checkout',
            mods: {
                expand: true
            }
        }));
    }
    renderWishlistModal() {
        const { showWishlist } = this.props;

        return ReactCSSTransitionGroup(
            ModalClass.animationOptions,
            showWishlist ? Modal({ closeOnClickOverlay: true }, Wishlist()) : null
        );
    }
    render() {
        const { loading } = this.props;

        return Block({
            mods: {
                loading
            }
        },
            Block({
                elem: 'body',
                tag: 'main'
            }, this.renderProducts(), this.renderSummaryBlock()),
            this.renderWishlistModal()
        );
    }
}
export default App;
