// Library
import React, { useState } from 'react';

// Components
import { Button } from '@components/commons/Button';
import { Modal } from '@components/Modal';
import { Form } from '@components/Form';

// Style
import './index.css';

// Constants
import { ButtonVariants, FormVariants, PRODUCT_TYPE_LIST } from '@constants/types';

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
        <Button
          title='Add new product'
          variant={ButtonVariants.Primary}
          handleButtonClick={handleOpenForm}
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
