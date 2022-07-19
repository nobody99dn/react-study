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

// Model
import { Product } from '@models/product';

export interface CardProps {
  product: Product;
  currency?: Currencies;
  handleOpenProductDetail: (productId: string) => void;
  handleDeleteProduct: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  product,
  // TODO: set default value
  currency,
  handleOpenProductDetail,
  handleDeleteProduct
}) => {
  // TODO: remove {}
  const { name, imageUrl, price, id, type } = product || {};

  // TODO: change to loading full page
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  const handleToggleModal = () => {
    // TODO: handle navigate
    handleOpenProductDetail(id);
  };

  const handleDelete = () => {
    setIsDeleteLoading(true);
    handleDeleteProduct(id);
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
          // TODO: check naming
          fs='italic'
          // TODO: change to lineHeight
          p='0 0.5rem'
          // TODO: fontSize
          size='16px'
        >
          {type}
        </Title>
        <Title variant={VariantTypes.Subtitle} fw={FwType.Bold} p='0.5rem'>
          {currencyFormat(price)}
          <span> {currency}</span>
        </Title>
        <div className='button-wrapper'>
          <Button title='Edit' handleClick={handleToggleModal} />
          <Button
            variant={ButtonVariants.Secondary}
            title='Delete'
            isLoading={isDeleteLoading}
            handleClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
