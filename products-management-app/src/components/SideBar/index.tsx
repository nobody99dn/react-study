// Library
import React from 'react';

// Components
import Button from '@components/commons/Button';
import Filter from '@components/Filter';

// Style
import './index.css';

// Constants
import { ButtonVariants, FilterOrderOptions, ORDER_OPTIONS, ProductTypes, PRODUCT_TYPE_LIST } from '@constants/types';

interface SideBarProps {
  handleOpenModalForm: () => void;
  currentFilterTypeParam: ProductTypes | undefined,
  currentFilterPriceParam: FilterOrderOptions | undefined,
  handleTypeChange: (value: string) => void;
  handlePriceChange: (value: string) => void;
  handleClearFilters: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  handleOpenModalForm,
  currentFilterTypeParam,
  currentFilterPriceParam,
  handleTypeChange,
  handlePriceChange,
  handleClearFilters
}) => {

  return (
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
};

export default SideBar;
