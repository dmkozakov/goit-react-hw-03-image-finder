import Gallery from './ImageGallery.styled';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { IGalleryState } from 'interfaces/IGalleryState';

type Props = Pick<IGalleryState, 'images' | 'isLoading'>;

const ImageGallery = ({ images, isLoading }: Props) => {
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
