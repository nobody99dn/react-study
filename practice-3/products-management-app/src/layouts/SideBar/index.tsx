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
  onOpenModalForm: () => void;
  onTypeChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onClearFilters: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  currentFilterTypeParam,
  currentFilterPriceParam,
  onOpenModalForm,
  onTypeChange,
  onPriceChange,
  onClearFilters
}) => (
  <div className='sidebar'>
    <div className='add-button'>
      <Button
        title='Add new product'
        variant={ButtonVariants.Primary}
        onClick={onOpenModalForm}
      />
    </div>
    <Filter
      typeFilterOptions={PRODUCT_TYPE_LIST}
      priceFilterOptions={ORDER_OPTIONS}
      currentFilterTypeParam={currentFilterTypeParam}
      currentFilterPriceParam={currentFilterPriceParam}
      onTypeChange={onTypeChange}
      onPriceChange={onPriceChange}
      onClearFilters={onClearFilters}
    />
  </div>
);

export default memo(SideBar);
