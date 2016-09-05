import { connect } from 'react-redux';
import OrderSummary from './component';
import { getSubTotal, getShippingFee, getTotal } from '~/selectors/orderSummary';

function mapStateToProps(state) {
    return {
        subTotal: getSubTotal(state),
        shippingFee: getShippingFee(state),
        total: getTotal(state)
    };
}

export default connect(
    mapStateToProps,
    null
)(OrderSummary);
