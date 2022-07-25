// Library
import React, { memo } from 'react';

// Constants
import { FilterOrderOptions, ProductTypes } from '@constants/index';

// Components
import { SelectItem, Button } from '@components/index';

// Styles
import './index.css';

export type FilterProps = {
  typeFilterOptions: ProductTypes[];
  priceFilterOptions: FilterOrderOptions[];
  currentFilterTypeParam?: ProductTypes;
  currentFilterPriceParam?: FilterOrderOptions;
  onTypeChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onClearFilters: () => void;
};

const Filter: React.FC<FilterProps> = ({
  typeFilterOptions,
  priceFilterOptions,
  currentFilterTypeParam = '',
  currentFilterPriceParam = '',
  onTypeChange,
  onPriceChange,
  onClearFilters
}) => (
  <div className='filter-container'>
    <div className='filter-item'>
      <SelectItem
        label='Type'
        options={typeFilterOptions}
        name='type-option'
        onSelectChange={onTypeChange}
        defaultValue={currentFilterTypeParam}
      />
    </div>
    <div className='filter-item'>
      <SelectItem
        label='Price'
        options={priceFilterOptions}
        name='price-filter'
        onSelectChange={onPriceChange}
        defaultValue={currentFilterPriceParam}
      />
    </div>
    <Button onClick={onClearFilters}>Clear filter</Button>
  </div>
);

export default memo(Filter);
