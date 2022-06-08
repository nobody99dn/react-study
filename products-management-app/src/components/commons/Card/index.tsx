// Libraries
import React, { ReactNode, useState } from 'react';

// Components
import { Image } from '@components/commons/Image';
import { Title, VariantsTypes } from '@components/commons/Title';
import { Button } from '@components/commons/Button';

// Constants
import { ButtonVariants, Currencies, FwType } from '@/constants/types';

// Helpers
import { currencyFormat } from '@helpers/string';

// Styles
import './index.css';

interface CardProps {
  type: string;
  currency: Currencies;
  price: number;
  imageUrl: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({
  type,
  currency,
  imageUrl,
  price,
  title,
}) => {
  return (
    <div className="card">
      <Image
        imageUrl={imageUrl}
        alt={title}
        className={'card-image'}
      />
      <div className="card-body">
        <div className={'title-wrapper'}>
          <Title className={'card-title'} p={'0.5rem 0.5rem 0 0.5rem'}>{title}</Title>
        </div>
        <Title
          color={'var(--dark)'}
          variant={VariantsTypes.Subtitle}
          fs='italic'
          p={'0 0.5rem'}
          size={'16px'}
        >
          {type}
        </Title>
        <Title
          variant={VariantsTypes.Subtitle}
          fw={FwType.Bold}
          p={'0.5rem'}
        >
          {currencyFormat(price)}
          <span> {currency}</span>
        </Title>
        <div className='button-wrapper'>
          <Button>Edit</Button>
          <Button variant={ButtonVariants.Secondary}>Delete</Button>
        </div>
      </div>
    </div >
  );
};
