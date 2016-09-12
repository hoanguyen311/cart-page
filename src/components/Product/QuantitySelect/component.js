import { Component, PropTypes } from 'react';
import { blockFactory } from 'rebem';

const Block = blockFactory('product-quantity-select');

class QuantitySelect extends Component {
    constructor(props) {
        super(...props);

        this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);

    }
    renderQuantityOption() {
        const { availableQuanities } = this.props;

        return availableQuanities.map((availableQuantity) => Block({
            elem: 'option',
            tag: 'option',
            key: availableQuantity
        }, availableQuantity));
    }
    handleChangeDropdown(e) {
        const { sku } = this.props;
        const quantity = parseInt(e.target.value);

        this.props.handleChangeQuantity(sku, quantity);
    }
    handleClickButton(action) {
        const { availableQuanities, sku } = this.props;
        let { quantity } = this.props;
        const currentIndex = availableQuanities.indexOf(quantity);

        switch (action) {
            case 'up':
                if (!availableQuanities[currentIndex + 1]) {
                    return;
                }
                quantity = availableQuanities[currentIndex + 1];
                break;
            case 'down':
                if (!availableQuanities[currentIndex - 1]) {
                    return;
                }
                quantity = availableQuanities[currentIndex - 1];
                break;
            default:
        }

        this.props.handleChangeQuantity(sku, quantity);
    }
    render() {
        const { availableQuanities, quantity } = this.props;

        const maxQuantity = Math.max(...availableQuanities);
        const minQuantity = Math.min(...availableQuanities);

        return Block(
            null,
            Block({
                elem: 'button',
                mods: {
                    act: 'down',
                    disabled: quantity === minQuantity
                },
                tag: 'span',
                onClick: () => {
                    this.handleClickButton('down');
                }
            }, ''),
            Block({
                elem: 'dropdown',
                tag: 'select',
                value: quantity,
                onChange: this.handleChangeDropdown
            }, this.renderQuantityOption()),
            Block({
                elem: 'button',
                mods: {
                    act: 'up',
                    disabled: quantity === maxQuantity
                },
                tag: 'span',
                onClick: () => {
                    this.handleClickButton('up');
                }
            }, ''),
        );
    }
}

QuantitySelect.defaultProps = {
    availableQuanities: [],
    quantity: -1
};

QuantitySelect.propTypes = {
    availableQuanities: PropTypes.arrayOf(PropTypes.number),
    quantity: PropTypes.number,
    handleChangeQuantity: PropTypes.func.isRequired
};

QuantitySelect.className = 'QuantitySelect';
export default QuantitySelect;
