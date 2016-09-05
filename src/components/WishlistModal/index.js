import { connect } from 'react-redux';
import Modal from '~/components/Modal';
import { hideWishlist } from '~/actions/wishlist';
// function mapStateToProps(state) {
//     return {
//         items: getWishlistProducts(state.products)
//     };
// }

function mapDispatchToProps(dispatch) {
    return {
        handleClickClose() {
            dispatch(hideWishlist());
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Modal);
