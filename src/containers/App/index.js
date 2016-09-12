import { connect } from 'react-redux';
import App from '#App';
import { requestData } from '~/actions/app';
import { showWishlist } from '~/actions/wishlist';

function mapStateToProps(state) {
    return {
        loading: state.app.loading,
        showWishlist: state.wishlist.showWishlist
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadData() {
            dispatch(requestData());
        },
        handleShowWishlist() {
            dispatch(showWishlist());
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
