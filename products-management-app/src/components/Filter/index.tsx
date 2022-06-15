// Library
import React, { useState, useCallback, useEffect } from 'react';

// Constants
import { FilterOrderOptions, ProductTypes } from '@constants/types';

// Components
import Select from '@components/commons/SelectItem';
import Button from '@components/commons/Button';

// Styles
import './index.css';

// Store
import { useStore } from '@store/store';
import { filterProductsSuccess } from '@store/actions';

type FilterProps = {
  typeFilterOptions: ProductTypes[];
  priceFilterOptions: FilterOrderOptions[];
};

const Filter: React.FC<FilterProps> = ({
  typeFilterOptions,
  priceFilterOptions
}) => {
  const { dispatch } = useStore();

  const [currentFilterPriceParam, setCurrentFilterPriceParam] = useState<string>('');
  const [currentFilterTypeParam, setCurrentFilterTypeParam] = useState<string>('');

  const handleClearFilters = useCallback(() => {
    setCurrentFilterPriceParam('');
    setCurrentFilterTypeParam('');
  }, [currentFilterTypeParam, currentFilterPriceParam]);

  const handleTypeChange = useCallback((value: ProductTypes): void => {
    setCurrentFilterTypeParam(value);
  }, [currentFilterTypeParam]);

  const handlePriceChange = useCallback((value: FilterOrderOptions): void => {
    setCurrentFilterPriceParam(value);
  }, [currentFilterPriceParam]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        filterProductsSuccess({ currentFilterTypeParam, currentFilterPriceParam })
      );
    }, 500);
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
        onClick={handleClearFilters}
      />
    </div>
  );
};

export default Filter;
