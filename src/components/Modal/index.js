import { Component, PropTypes } from 'react';
import { blockFactory } from 'rebem';

const Block = blockFactory('l-modal');

class Modal extends Component {
    constructor(props) {
        super(...props);
        this.handlerClose = this.handlerClose.bind(this);
    }
    renderBody(content) {
        return Block({
            elem: 'body'
        }, Block(
            {
                elem: 'inner'
            },
            Block(
                { elem: 'content', onClick: (e) => e.stopPropagation() },
                content,
                Block({ elem: 'close-button', onClick: this.handlerClose })
            )
        ));
    }
    handlerClose(e) {
        this.props.handleClickClose();
    }
    render() {
        const { children, closeOnClickOverlay } = this.props;

        return Block(
            null,
            Block({
                elem: 'overlay',
                onClick: closeOnClickOverlay ? () => this.handlerClose() : null
            }, this.renderBody(children))
        );
    }
}
Modal.animationOptions = {
    transitionName: 'modal',
    transitionAppearTimeout: 400,
    transitionEnterTimeout: 400,
    transitionLeaveTimeout: 200,
    transitionAppear: true
};

Modal.displayName = 'Modal';
Modal.defaultProps = {
    closeOnClickOverlay: false
};
Modal.propTypes = {
    closeOnClickOverlay: PropTypes.bool,
    handleClickClose: PropTypes.func.isRequired
};
export const animationOptions = Modal.animationOptions;
export default Modal;
