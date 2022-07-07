// Libraries
import React, { useState } from 'react';

// Components
import Image from '@components/commons/Image';
import Title, { VariantTypes } from '@components/commons/Title';
import Button from '@components/commons/Button';

// Constants
import { ButtonVariants, Currencies, FwType } from '@constants/index';

// Helpers
import { currencyFormat } from '@helpers/string';

// Styles
import './index.css';

// Type
import { Product } from '@models/product';

interface CardProps {
  product: Product;
  currency: Currencies;
  onOpenModalForm: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  product,
  currency,
  onOpenModalForm,
  onDeleteProduct
}) => {
  const { name, imageUrl, price, id, type } = product || {};

  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  const handleToggleModal = () => {
    onOpenModalForm(product);
  };

  const handleDeleteProduct = () => {
    setIsDeleteLoading(true);
    onDeleteProduct(id);
  };

  return (
    <div className='card'>
      <Image imageUrl={imageUrl} alt={name} className='card-image' />
      <div className='card-body'>
        <div className='title-wrapper'>
          <Title className='card-title' p='0.5rem 0.5rem 0 0.5rem'>
            {name}
          </Title>
        </div>
        <Title
          color='var(--dark)'
          variant={VariantTypes.Subtitle}
          fs='italic'
          p='0 0.5rem'
          size='16px'
        >
          {type}
        </Title>
        <Title variant={VariantTypes.Subtitle} fw={FwType.Bold} p='0.5rem'>
          {currencyFormat(price)}
          <span> {currency}</span>
        </Title>
        <div className='button-wrapper'>
          <Button title='Edit' onClick={handleToggleModal} />
          <Button
            variant={ButtonVariants.Secondary}
            title='Delete'
            isLoading={isDeleteLoading}
            onClick={handleDeleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
