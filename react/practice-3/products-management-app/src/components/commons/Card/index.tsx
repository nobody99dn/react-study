// Libraries
import React, { memo, useCallback } from 'react';

// Components
import { Image, Title, Button } from '@components/index';

// Constants
import { Currencies } from '@constants/index';

// Helpers
import { currencyFormat } from '@helpers/string';

// Styles
import './index.css';

// Models
import { Product } from '@models/product';

// Types
import { ButtonVariants, FwType, VariantTypes } from '@common-types/index';

export interface CardProps {
  product: Product;
  currency?: Currencies;
  onNavigate: (productId: string) => void;
  onDeleteProduct: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  product,
  currency = Currencies.VND,
  onNavigate,
  onDeleteProduct
}) => {
  const { name, imageUrl, price, id, type: typeProduct } = product;

  const handleToggleModal = useCallback(() => {
    onNavigate(id);
  }, []);

  const handleDelete = useCallback(() => {
    onDeleteProduct(id);
  }, []);

  return (
    <div className='card'>
      <div className='card-image'>
        <Image imageUrl={imageUrl} alt={name} />
      </div>
      <div className='card-body'>
        <div className='title-wrapper'>
          <Title className='card-title' lineHeight='1.5rem'>
            {name}
          </Title>
        </div>
        <Title
          color='var(--dark)'
          variant={VariantTypes.Subtitle}
          fontStyle='italic'
          lineHeight='2rem'
          fontSize='16px'
        >
          {typeProduct}
        </Title>
        <Title
          variant={VariantTypes.Subtitle}
          fontWeight={FwType.Bold}
          lineHeight='1.5rem'
        >
          {currencyFormat(price)}
          <span> {currency}</span>
        </Title>
        <div className='button-wrapper'>
          <Button onClick={handleToggleModal}>Edit</Button>
          <Button variant={ButtonVariants.Secondary} onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
