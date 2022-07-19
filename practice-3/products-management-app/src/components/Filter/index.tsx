// Library
import React from 'react';

// Constants
import { FilterOrderOptions, ProductTypes } from '@constants/index';

// Components
import Select from '@components/commons/SelectItem';
import Button from '@components/commons/Button';

// Styles
import './index.css';

export type FilterProps = {
  typeFilterOptions: ProductTypes[];
  priceFilterOptions: FilterOrderOptions[];
  currentFilterTypeParam: ProductTypes | '';
  currentFilterPriceParam: FilterOrderOptions | '';
  handleTypeChange: (value: string) => void;
  handlePriceChange: (value: string) => void;
  handleClearFilters: () => void;
};

const Filter: React.FC<FilterProps> = ({
  typeFilterOptions,
  priceFilterOptions,
  currentFilterTypeParam,
  currentFilterPriceParam,
  handleTypeChange,
  handlePriceChange,
  handleClearFilters
}) => (
  <div className='filter-container'>
    <div className='filter-item'>
      <Select
        label='Type'
        options={typeFilterOptions}
        name='type-option'
        handleSelectChange={handleTypeChange}
        value={currentFilterTypeParam}
      />
    </div>
    <div className='filter-item'>
      <Select
        label='Price'
        options={priceFilterOptions}
        name='price-filter'
        handleSelectChange={handlePriceChange}
        value={currentFilterPriceParam}
      />
    </div>
    <Button title='Clear filter' handleClick={handleClearFilters} />
  </div>
);

export default Filter;
