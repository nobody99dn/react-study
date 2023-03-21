// Library
import React, { lazy, memo, Suspense } from 'react';

// Components
import { LoadingIndicator } from '@components/index';
const Button = lazy(() => import('@components/commons/Button'));
const Filter = lazy(() => import('@components/Filter'));

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
  <Suspense fallback={<LoadingIndicator />}>
    <div className='sidebar'>
      <div className='add-button'>
        <Button variant={ButtonVariants.Primary} onClick={onOpenModalForm}>
          Add new product
        </Button>
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
  </Suspense>
);

export default memo(SideBar);
