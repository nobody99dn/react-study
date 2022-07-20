// Libraries
import React from 'react';

// Components
import { Image, Title, Button } from '@components/index';

// Constants
import {
  ButtonVariants,
  Currencies,
  FwType,
  VariantTypes
} from '@constants/index';

// Helpers
import { currencyFormat } from '@helpers/string';

// Styles
import './index.css';

// Models
import { Product } from '@models/product';

export interface CardProps {
  product: Product;
  currency?: Currencies;
  handleNavigate: (productId: string) => void;
  handleDeleteProduct: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  product,
  currency = Currencies.VND,
  handleNavigate,
  handleDeleteProduct
}) => {
  const { name, imageUrl, price, id, type } = product;

  const handleToggleModal = () => {
    handleNavigate(id);
  };

  const handleDelete = () => {
    handleDeleteProduct(id);
  };

  return (
    <div className='card'>
      <Image imageUrl={imageUrl} alt={name} className='card-image' />
      <div className='card-body'>
        <div className='title-wrapper'>
          <Title className='card-title' lineHeight='1.5'>
            {name}
          </Title>
        </div>
        <Title
          color='var(--dark)'
          variant={VariantTypes.Subtitle}
          fontStyle='italic'
          lineHeight='1.6'
          fontSize='16px'
        >
          {type}
        </Title>
        <Title
          variant={VariantTypes.Subtitle}
          fontWeight={FwType.Bold}
          lineHeight='1.6'
        >
          {currencyFormat(price)}
          <span> {currency}</span>
        </Title>
        <div className='button-wrapper'>
          <Button title='Edit' handleClick={handleToggleModal} />
          <Button
            variant={ButtonVariants.Secondary}
            title='Delete'
            handleClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
