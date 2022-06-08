// Libraries
import React, { useState } from 'react';
import { FilterOrderOptions, ProductTypes } from '@/constants/types';
import { Select } from '../commons/Select';
import './index.css';

interface FilterProps {
  typeFilterOptions: ProductTypes[];
  priceFilterOptions: FilterOrderOptions[];
  onTypeFilterChange: (value: ProductTypes) => void;
  onPriceFilterChange: (value: FilterOrderOptions) => void;
}

export const Filter: React.FC<FilterProps> = ({
  typeFilterOptions,
  priceFilterOptions,
  onTypeFilterChange,
  onPriceFilterChange
}) => {
  const [currentFilterPriceParam, setCurrentFilterPriceParam] = useState('');
  const [currentFilterTypeParam, setCurrentFilterTypeParam] = useState('');

  const handleTypeChange = (value: ProductTypes): void => {
    onTypeFilterChange(value);

    setCurrentFilterTypeParam(value);
  };

  const handlePriceChange = (value: FilterOrderOptions): void => {
    onPriceFilterChange(value);

    setCurrentFilterPriceParam(value);
  };

  return (
    <div className={'filter-container'}>
      <div className={'filter-item'}>
        <Select
          label={'Type'}
          options={typeFilterOptions}
          name={'type-option'}
          onChange={handleTypeChange}
          value={currentFilterTypeParam}
        />
      </div>
      <div className={'filter-item'}>
        <Select
          label={'Price'}
          options={priceFilterOptions}
          name={'price-filter'}
          onChange={handlePriceChange}
          value={currentFilterPriceParam}
        />
      </div>
    </div>
  );
};
