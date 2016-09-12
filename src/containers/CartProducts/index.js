import { connect } from 'react-redux';
import CartProducts from '#CartProducts';
import { removeItem } from '~/actions/products';
import { getAllProducts } from '~/reducers/products';
import { addItemToWishlist } from '~/actions/wishlist';

function mapStateToProps(state) {
    return {
        items: getAllProducts(state.products)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleRemoveItem(sku) {
            dispatch(removeItem({ sku }));
        },
        handleAddItemToWishlist(item) {
            dispatch(addItemToWishlist(item));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartProducts);
