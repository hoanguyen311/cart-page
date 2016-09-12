import { blockFactory } from 'rebem';

const Block = blockFactory('product-price');

function ProductPrice(props) {
    const { price, oldPrice, sale } = props;

    return Block(null,
        Block({
            elem: 'main-price'
        }, price),
        oldPrice && Block({
            elem: 'original-price'
        }, oldPrice),
        oldPrice && Block({
            elem: 'sale'
        }, `${sale}% OFF`)
    );
}

ProductPrice.displayName = 'ProductPrice';
export default ProductPrice;
