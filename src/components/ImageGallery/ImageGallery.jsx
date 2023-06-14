import PropTypes from 'prop-types';
import Gallery from './ImageGallery.styled';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';

const ImageGallery = ({ images, isLoading }) => {
  const showLoader = isLoading && images.length > 0;

  return (
    <>
      (
      <Gallery>
        {images.length > 0 &&
          images.map(image => (
            <GalleryItem key={image.id}>
              <ImageGalleryItem image={image} />
            </GalleryItem>
          ))}
      </Gallery>
      ){showLoader && <Loader />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
