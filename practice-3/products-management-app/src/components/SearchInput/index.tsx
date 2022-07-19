// Library
import React, { memo } from 'react';

// Asset
import { searchIcon } from '@assets/index';

// Component
import TextField from '@components/commons/TextField';

export interface SearchInputProps {
  productName: string;
  handleSearchProduct: (value: string | number) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  productName,
  handleSearchProduct
}) => (
  <TextField
    placeholder='Searching...'
    iconUrl={searchIcon}
    height='4.25rem'
    iconWidth='2rem'
    handleInputChange={handleSearchProduct}
    defaultValue={productName}
  />
);

export default memo(SearchInput);
