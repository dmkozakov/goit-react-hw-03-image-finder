import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image }) => {
  const { tags, largeImageURL, webformatURL } = image;

  console.log(tags);
  return <img src={webformatURL} alt={tags} />;
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  //   largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string,
};
