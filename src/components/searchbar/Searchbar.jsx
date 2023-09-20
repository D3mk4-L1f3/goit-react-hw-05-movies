import PropTypes from 'prop-types';
import React from 'react';
import {
  SearchForm,
  SearchFormInput,
  SearchHead,
} from 'component-style/searchbar/searcnbar.styled';

const Searchbar = ({ value, onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <SearchHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          autoFocus={true}
          type="text"
          name="query"
          value={value}
          onChange={evt => onChange(evt.target.value)}
          placeholder="..."
        />
      </SearchForm>
    </SearchHead>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
