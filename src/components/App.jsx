import { Component } from 'react';
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
    showModal: false
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      try {
        this.setState({ isLoading: true });

        this.resetPage();

        const response = await fetchImages(searchQuery);
        const images = response.hits;
        this.setState({ images });

        this.incrementPage();
      } catch (error) {
        console.log(error);
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
      console.log(error);
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
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {isLoading && <Loader />}

        {images.length !== 0 && <Button onClick={this.handleLoadMore} />}
      </>
    );
  }
}
