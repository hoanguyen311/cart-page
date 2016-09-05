import { Component } from 'react';
import { blockFactory } from 'rebem';
import './styles.less';

const ButtonBlock = blockFactory('l-button');

export default class extends Component {
    render() {
        const { text, ...props } = this.props;

        return ButtonBlock({
            ...props,
            tag: 'button'
        },
            ButtonBlock({
                elem: 'text',
                tag: 'span'
            }, text)
        );
    }
}
