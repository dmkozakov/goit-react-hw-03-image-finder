import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <li className="gallery-item" key={image.id}>
          <ImageGalleryItem image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
