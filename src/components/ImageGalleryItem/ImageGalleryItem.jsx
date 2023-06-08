import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    console.log('Открываем модалку');

    this.setState({ showModal: true });
  };

  closeModal = () => {
    console.log('Закрываем модалку');
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;
    const { webformatURL, largeImageURL, tags } = image;

    return (
      <div>
        <img src={webformatURL} alt={tags} onClick={this.openModal} />

        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  // largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string,
};
