import PropTypes from 'prop-types';

import { SearchForm, SearchBar, Input, SearchBtn } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.query.value);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movie" />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </SearchBar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
