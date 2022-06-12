// Library
import React, { useState } from 'react';

// Components
import { Button } from '@components/commons/Button';
import { Modal } from '@components/Modal';
import { Form } from '@components/Form';

// Style
import './index.css';

// Constants
import { ButtonVariants, FormVariants, ORDER_OPTIONS, PRODUCT_TYPE_LIST } from '@constants/types';
import { Filter } from '@components/Filter';

interface SideBarProps { }

export const SideBar: React.FC<SideBarProps> = ({ }) => {
  const [isModalShow, setIsModalShow] = useState(false);

  const handleOpenForm = () => {
    setIsModalShow(true);
  };

  const handleAddProduct = () => {
    setIsModalShow(false);
  };

  const handleCloseModal = () => {
    setIsModalShow(false);
  };

  return (
    <>
      <div className='sidebar'>
        <div className='add-button'>
          <Button
            title='Add new product'
            variant={ButtonVariants.Primary}
            onClick={handleOpenForm}
          />
        </div>
        <Filter
          typeFilterOptions={PRODUCT_TYPE_LIST}
          priceFilterOptions={ORDER_OPTIONS}
        />
      </div>
      <Modal
        isVisible={isModalShow}
        handleClose={handleCloseModal}
      >
        <Form
          handleSubmit={handleAddProduct}
          variants={FormVariants.Create}
          options={PRODUCT_TYPE_LIST}
          productItem={{
            id: '',
            name: '',
            type: '',
            price: 0,
            imageUrl: ''
          }}
        />
      </Modal>
    </>
  );
};
