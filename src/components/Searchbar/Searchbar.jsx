import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  query: '',
};

class Searchbar extends Component {
  handleSubmit = ({ query }, { resetForm }) => {
    if (!query) {
      return alert('Enter a query');
    }
    this.props.onSubmit(query.trim().toLowerCase());
    resetForm();
  };
  render() {
    return (
      <header className="searchbar">
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <Form className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <Field
              name="query"
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </Formik>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
