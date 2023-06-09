import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
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

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
};
