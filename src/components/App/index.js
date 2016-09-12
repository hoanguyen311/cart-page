import { Component, createFactory, PropTypes } from 'react';
import ReactCSSTransitionGroupClass from 'react-addons-css-transition-group';
import { blockFactory } from 'rebem';

import OrderSummary from '#OrderSummary';
import CartProducts from '#CartProducts';
import Modal from '#WishlistModal';
import { animationOptions } from '~/components/Modal';
import Wishlist from '#Wishlist';
import CartButton from '#Button';

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
            animationOptions,
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
