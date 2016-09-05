import { connect } from 'react-redux';
import CartProducts from './component';
import { updateQuantity } from '~/actions/products';

function mapDispatchToProps(dispatch) {
    return {
        handleChangeQuantity(sku, quantity) {
            dispatch(updateQuantity({ sku, quantity }));
        }
    };
}
export default connect(
    null,
    mapDispatchToProps
)(CartProducts);
