import { connect } from 'react-redux';
import App from './component';
import { loadData } from '~/actions/app';
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
            dispatch(loadData());
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
