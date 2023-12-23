import Modal from 'components/Modal/Modal';
import { IImage } from 'interfaces/IImage';
import { Component } from 'react';

interface Props {
  image: IImage;
}

class ImageGalleryItem extends Component<Props> {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;
    const { webformatURL, largeImageURL, tags } = image;

    return (
      <>
        <img src={webformatURL} alt={tags} onClick={this.openModal} />

        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
