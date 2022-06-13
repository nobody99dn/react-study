// Library
import React from 'react';

// Asset
import { searchIcon } from '@assets/index';

// Component
import { TextField } from '@components/commons/TextField';

// Store
import { useStore } from '@store/store';
import { searchProducts } from '@store/actions';

interface SearchProps { }

export const Search: React.FC<SearchProps> = () => {
  const { dispatch } = useStore();

  const handleSearchProduct = (value: string | number) => {
    dispatch(searchProducts(value));
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
