// Library
import React, { memo } from 'react';

// Asset
import { searchIcon } from '@assets/index';

// Component
import { TextField } from '@components/index';

export interface SearchInputProps {
  productName: string;
  onSearchProduct: (value: string | number) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  productName,
  onSearchProduct
}) => (
  <TextField
    placeholder='Searching...'
    iconUrl={searchIcon}
    height='4.25rem'
    iconWidth='2rem'
    onInputChange={onSearchProduct}
    defaultValue={productName}
  />
);

export default memo(SearchInput);
