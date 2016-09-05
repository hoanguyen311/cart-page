import { blockFactory } from 'rebem';

import './styles.less';

const Block = blockFactory('product-image');


export default function(props) {
    const { link, image, name } = props;

    return Block({
        tag: 'figure'
    },
        Block({
            elem: 'link',
            tag: 'a',
            href: link
        }, Block({
            elem: 'image',
            tag: 'img',
            alt: name,
            src: image
        }))
    );
}
