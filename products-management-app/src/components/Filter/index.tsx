// Library
import React, { useState, useCallback, useEffect } from 'react';

// Constants
import { FilterOrderOptions, ProductTypes } from '@constants/types';

// Components
import { Select } from '@components/commons/Select';

// Styles
import './index.css';

// Store
import { useStore } from '@store/store';
import { filterProducts } from '@store/actions';
import { Button } from '@components/commons/Button';

type FilterProps = {
  typeFilterOptions: ProductTypes[];
  priceFilterOptions: FilterOrderOptions[];
  onTypeFilterChange: (value: ProductTypes) => void;
  onPriceFilterChange: (value: FilterOrderOptions) => void;
};

export const Filter: React.FC<FilterProps> = ({
  typeFilterOptions,
  priceFilterOptions,
  onTypeFilterChange,
  onPriceFilterChange
}) => {
  const { dispatch } = useStore();

  const [currentFilterPriceParam, setCurrentFilterPriceParam] = useState<string>('');
  const [currentFilterTypeParam, setCurrentFilterTypeParam] = useState<string>('');

  const handleClearFilters = () => {
    setCurrentFilterPriceParam('');
    setCurrentFilterTypeParam('');
  };

  const handleTypeChange = useCallback((value: ProductTypes): void => {
    onTypeFilterChange(value);

    setCurrentFilterTypeParam(value);
  }, [currentFilterTypeParam]);

  const handlePriceChange = useCallback((value: FilterOrderOptions): void => {
    onPriceFilterChange(value);

    setCurrentFilterPriceParam(value);
  }, [currentFilterPriceParam]);

  useEffect(() => {
    dispatch(
      filterProducts({ currentFilterTypeParam, currentFilterPriceParam })
    );
  }, [currentFilterPriceParam, currentFilterTypeParam]);

  return (
    <div className='filter-container'>
      <div className='filter-item'>
        <Select
          label='Type'
          options={typeFilterOptions}
          name='type-option'
          onChange={handleTypeChange}
          value={currentFilterTypeParam}
        />
      </div>
      <div className='filter-item'>
        <Select
          label='Price'
          options={priceFilterOptions}
          name='price-filter'
          onChange={handlePriceChange}
          value={currentFilterPriceParam}
        />
      </div>
      <Button
        title='Clear filter'
        handleButtonClick={handleClearFilters}
      />
    </div>
  );
};
