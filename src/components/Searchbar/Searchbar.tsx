import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SearchbarStyled from './Searchbar.styled';
import SearchForm from './SearchForm.styled';
import { Field, Formik, FormikHelpers } from 'formik';

interface Props {
  onSubmit: (query: string) => void;
}

interface FormValues {
  query: string;
}

const initialValues = {
  query: '',
};

class Searchbar extends Component<Props> {
  handleSubmit = async (
    { query }: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
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
