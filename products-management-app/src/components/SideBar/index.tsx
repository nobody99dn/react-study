// Library
import React from 'react';

// Components
import Button from '@components/commons/Button';
import Filter from '@components/Filter';

// Style
import './index.css';

// Constants
import { ButtonVariants, ORDER_OPTIONS, PRODUCT_TYPE_LIST } from '@constants/types';
import { Product } from '@type/product';

interface SideBarProps {
  handleOpenModalForm: (product: Product) => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleOpenModalForm }) => {
  const handleClick = () => {
    handleOpenModalForm({
      id: '',
      name: '',
      type: '',
      price: 0,
      imageUrl: ''
    });
  };

  return (
    <div className='sidebar'>
      <div className='add-button'>
        <Button
          title='Add new product'
          variant={ButtonVariants.Primary}
          onClick={handleClick}
        />
      </div>
      <Filter
        typeFilterOptions={PRODUCT_TYPE_LIST}
        priceFilterOptions={ORDER_OPTIONS}
      />
    </div>

  );
};

export default SideBar;
