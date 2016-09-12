import { connect } from 'react-redux';
import Modal from '#Modal';
import { hideWishlist } from '~/actions/wishlist';

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
