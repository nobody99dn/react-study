// Libraries
import React, { useState } from 'react';

// Components
import { Image } from '@components/commons/Image';
import { Title, VariantsTypes } from '@components/commons/Title';
import { Button } from '@components/commons/Button';

// Constants
import { ButtonVariants, Currencies, FormVariants, FwType, PRODUCT_TYPE_LIST } from '@constants/types';

// Helpers
import { currencyFormat } from '@helpers/string';

// Styles
import './index.css';

// Store
import { useStore } from '@store/store';
import { Modal } from '@components/Modal';
import { Product } from 'type/product';
import { Form } from '@components/Form';

interface CardProps {
  product: Product;
  currency: Currencies;
}

export const Card: React.FC<CardProps> = ({
  product,
  currency
}) => {
  const { globalState, dispatch } = useStore();

  const [isModalShow, setIsModalShow] = useState(false);

  const { name, imageUrl, price, id, type } = product || {};

  const handleEditProduct = () => {
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
      <div className='card'>
        <Image
          imageUrl={imageUrl}
          alt={name}
          className='card-image'
        />
        <div className='card-body'>
          <div className='title-wrapper'>
            <Title className='card-title' p='0.5rem 0.5rem 0 0.5rem'>{name}</Title>
          </div>
          <Title
            color='var(--dark)'
            variant={VariantsTypes.Subtitle}
            fs='italic'
            p='0 0.5rem'
            size='16px'
          >
            {type}
          </Title>
          <Title
            variant={VariantsTypes.Subtitle}
            fw={FwType.Bold}
            p='0.5rem'
          >
            {currencyFormat(price)}
            <span> {currency}</span>
          </Title>
          <div className='button-wrapper'>
            <Button
              title='Edit'
              handleButtonClick={handleEditProduct}
            />
            <Button
              variant={ButtonVariants.Secondary}
              title='Delete'
              handleButtonClick={() => { }}
            />
          </div>
        </div>
      </div >
      <Modal
        isVisible={isModalShow}
        handleClose={handleCloseModal}
      >
        <Form
          handleSubmit={handleAddProduct}
          variants={FormVariants.Edit}
          options={PRODUCT_TYPE_LIST}
          productItem={product}
        />
      </Modal>
    </>
  );
};
