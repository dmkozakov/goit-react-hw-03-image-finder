import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import fetchImage from 'services/pixabay-api';
import ImageGallery from './Searchbar/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
  };

  handleSearch = async query => {
    const response = await fetchImage(query);
    const images = response.hits;

    // console.log(images);
    this.setState({ images });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}
