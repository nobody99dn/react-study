// Libraries
import React, { useCallback, useState } from 'react';

// Components
import { Image } from '@components/commons/Image';
import { Title, VariantsTypes } from '@components/commons/Title';
import { Button } from '@components/commons/Button';

// Constants
import { ERROR_MESSAGES } from '@constants/messages';
import { ButtonVariants, Currencies, FormVariants, FwType, PRODUCT_TYPE_LIST } from '@constants/types';

// Helpers
import { currencyFormat } from '@helpers/string';

// Styles
import './index.css';

// Type
import { Product } from '@type/product';

// Service
import { removeProduct } from '@services/product.service';

// Store
import { deleteProduct, error as errorAction, useStore } from '@store/index';

// Components
import { Modal } from '@components/Modal';
import { Form } from '@components/Form';

interface CardProps {
  product: Product;
  currency: Currencies;
}

export const Card: React.FC<CardProps> = ({
  product,
  currency,
}) => {
  const { name, imageUrl, price, id, type } = product || {};
  const { globalState, dispatch } = useStore();

  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setIsModalShow(!isModalShow);
  }, []);

  const handleSubmitForm = () => {
    setIsModalShow(false);
  };

  const handleDeleteProduct = async () => {
    setIsDeleteLoading(true);
    try {
      const deletedProduct: Product = await removeProduct(id);

      if (deletedProduct instanceof Error) {
        throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
      }

      dispatch(deleteProduct(deletedProduct.id));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(errorAction(error.message));
        return;
      }
    }

    setIsDeleteLoading(false);
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
              onClick={handleToggleModal}
            />
            <Button
              variant={ButtonVariants.Secondary}
              title='Delete'
              isLoading={isDeleteLoading}
              onClick={handleDeleteProduct}
            />
          </div>
        </div>
      </div >
      <Modal
        isVisible={isModalShow}
        handleClose={handleToggleModal}
      >
        <Form
          handleSubmit={handleSubmitForm}
          variants={FormVariants.Edit}
          options={PRODUCT_TYPE_LIST}
          productItem={product}
        />
      </Modal>
    </>
  );
};
