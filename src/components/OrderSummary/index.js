import { PropTypes } from 'react';
import { blockFactory } from 'rebem';

const Block = blockFactory('order-summary');

const renderTotal = (total) => {
    const totalLabel = [
        'Total ',
        Block({
            elem: 'label-notice',
            tag: 'span'
        }, '(GST applied where applicable)'),
        ':'
    ];

    return Block({
        elem: 'total'
    }, Block({
        elem: 'total-label',
        tag: 'label'
    }, ...totalLabel),
    Block({
        elem: 'total-value'
    }, total));
};

const renderShippingFee = (shippingFee) => [
    Block({
        elem: 'details-label'
    }, 'Shipping Fee'),
    Block({
        elem: 'details-value'
    }, shippingFee)
];

const renderSubtotal = (subTotal) => [
    Block({
        elem: 'details-label'
    }, 'Subtotal:'),
    Block({
        elem: 'details-value'
    }, subTotal)
];

const OrderSummary = (props) => {
    const { subTotal, shippingFee, total } = props;

    return Block(
        null,
        Block({
            elem: 'header'
        }, 'Order Summary'),
        Block({
            elem: 'details'
        }, Block({
            elem: 'details-row'
        }, ...renderSubtotal(subTotal)),
        Block({
            elem: 'details-row'
        }, ...renderShippingFee(shippingFee))),
        renderTotal(total)
    );
};

OrderSummary.displayName = 'OrderSummary';

OrderSummary.defaultProps = {
    subTotal: '',
    shippingFee: '',
    total: ''
};

OrderSummary.propTypes = {
    subTotal: PropTypes.string.isRequired,
    shippingFee: PropTypes.string,
    total: PropTypes.string
};

export default OrderSummary;
