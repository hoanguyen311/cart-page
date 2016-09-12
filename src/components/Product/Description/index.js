import { blockFactory } from 'rebem';

const Block = blockFactory('product-description');

function ProductDescription(props) {
    const { name, size, branch, stockStatus } = props;

    return Block(
        null,
        Block({
            elem: 'name',
            tag: 'h3'
        }, name),
        size && Block({
            elem: 'size',
            tag: 'span'
        }, `Size: ${size}`),
        branch && Block({
            elem: 'branch',
            tag: 'p'
        }, branch),
        Block({
            elem: 'stock-status',
            tag: 'p'
        }, stockStatus)
    );
}
ProductDescription.displayName = 'ProductDescription';

export default ProductDescription;
