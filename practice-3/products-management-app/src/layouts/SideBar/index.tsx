// Library
import React, { memo } from 'react';

// Components
import { Button, Filter } from '@components/index';

// Style
import './index.css';

// Constants
import {
  FilterOrderOptions,
  ORDER_OPTIONS,
  ProductTypes,
  PRODUCT_TYPE_LIST
} from '@constants/index';

// Types
import { ButtonVariants } from '@common-types/index';

interface SideBarProps {
  currentFilterTypeParam?: ProductTypes;
  currentFilterPriceParam?: FilterOrderOptions;
  handleOpenModalForm: () => void;
  handleTypeChange: (value: string) => void;
  handlePriceChange: (value: string) => void;
  handleClearFilters: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  currentFilterTypeParam,
  currentFilterPriceParam,
  handleOpenModalForm,
  handleTypeChange,
  handlePriceChange,
  handleClearFilters
}) => (
  <div className='sidebar'>
    <div className='add-button'>
      <Button
        title='Add new product'
        variant={ButtonVariants.Primary}
        onClick={handleOpenModalForm}
      />
    </div>
    <Filter
      typeFilterOptions={PRODUCT_TYPE_LIST}
      priceFilterOptions={ORDER_OPTIONS}
      currentFilterTypeParam={currentFilterTypeParam}
      currentFilterPriceParam={currentFilterPriceParam}
      handleTypeChange={handleTypeChange}
      handlePriceChange={handlePriceChange}
      handleClearFilters={handleClearFilters}
    />
  </div>
);

export default memo(SideBar);
