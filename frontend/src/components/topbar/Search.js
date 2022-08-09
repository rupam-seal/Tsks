import React from 'react';

import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <div class="search">
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
      <SearchInput />
    </div>
  );
};

export const SearchIcon = ({ children }) => {
  return <div className="search__icon">{children}</div>;
};

export const SearchInput = () => {
  return (
    <input type="text" class="search__input" placeholder="Search .."></input>
  );
};

export default Search;
