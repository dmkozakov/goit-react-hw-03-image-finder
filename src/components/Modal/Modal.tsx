import { Component, KeyboardEvent, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import ModalStyled from './Modal.styled';
import Overlay from './Overlay.styled';

declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent<HTMLInputElement>;
  }
}

interface Props {
  onClose: () => void;
}

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

class Modal extends Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyled>{children}</ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
