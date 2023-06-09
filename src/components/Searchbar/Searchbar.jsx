import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SearchbarStyled from './Searchbar.styled';
import SearchForm from './SearchForm.styled';

const initialValues = {
  query: '',
};

class Searchbar extends Component {
  handleSubmit = ({ query }, { resetForm }) => {
    if (!query) {
      return toast.info('Please, enter a query');
    }
    this.props.onSubmit(query.trim().toLowerCase());
    resetForm();
  };
  render() {
    return (
      <SearchbarStyled>
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <SearchForm>
            <button type="submit">
              <span>Search</span>
            </button>

            <Field
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Formik>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
