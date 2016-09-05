import { connect } from 'react-redux';
import Wishlist from './component';
import { getWishlistProducts } from '~/reducers/wishlist';
import { addItemFromWishlist } from '~/actions/wishlist';

function mapStateToProps(state) {
    return {
        items: getWishlistProducts(state.wishlist)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddItem(item) {
            dispatch(addItemFromWishlist(item));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wishlist);
