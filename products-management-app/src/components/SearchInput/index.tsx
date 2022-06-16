// Library
import React from 'react';

// Asset
import { searchIcon } from '@assets/index';

// Component
import TextField from '@components/commons/TextField';

// Store
import { useStore } from '@store/store';
import { searchProductsSuccess } from '@store/actions';

const SearchInput: React.FC = () => {
  const { dispatch } = useStore();

  const handleSearchProduct = (value: string | number) => {
    setTimeout(() => {
      dispatch(searchProductsSuccess(value));
    }, 500);
  };
  return (
    <TextField
      placeholder='Searching...'
      iconUrl={searchIcon}
      height='4.25rem'
      iconWidth='2rem'
      onChange={handleSearchProduct}
    />
  );
};

export default SearchInput;
