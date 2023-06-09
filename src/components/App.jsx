import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AppStyled from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import fetchImages from 'services/pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ isLoading: true });

      try {
        this.resetPage();

        const response = await fetchImages(searchQuery);
        const images = response.hits;
        this.setState({ images });

        this.incrementPage();
      } catch (error) {
        toast.error(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = async query => {
    this.setState({ searchQuery: query });
  };

  handleLoadMore = async () => {
    const { searchQuery, page } = this.state;

    try {
      this.setState({ isLoading: true });

      const response = await fetchImages(searchQuery, page);
      const images = response.hits;

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      toast.error(error.message);
    } finally {
      this.setState({ isLoading: false });
    }

    this.incrementPage();
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length !== 0 && !isLoading && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {images.length !== 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AppStyled>
    );
  }
}
