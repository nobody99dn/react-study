import React, { useState, useEffect } from 'react';

// Styles
import './index.css';

// Constants
import { ButtonVariants, FormVariants, PRODUCT_TYPES } from '@/constants/types';

// Components
import { Title } from '@components/commons/Title';
import { TextField } from '@components/commons/TextField';
import { Button } from '@components/commons/Button';
import { Select } from '@components/commons/Select';

interface FormProps {
  variants: FormVariants;
  handleSubmit(): void;
  productItem: {
    id: string,
    name: string,
    type: string,
    price: number;
  };
}

export const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  handleSubmit
}) => {
  const [product, setProduct] = useState(productItem);

  const handleNameChange = (value: string | number): void => {
    setProduct({ ...product, name: value });
  };

  const handlePriceChange = (value: string | number): void => {
    setProduct({ ...product, price: value });
  };

  const handleTypeChange = (value: string | number): void => {
    setProduct({ ...product, type: value });
  };

  useEffect(() => {
    console.log(product);

  }, [product]);

  return (
    <div className='form-wrapper'>
      <Title>{variants} Form</Title>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='field-group'>
          <TextField
            defaultValue={product.name}
            name='name'
            label='Product name'
            placeholder='Enter product name...'
            onChange={handleNameChange}
          />
          <Select
            label='Product type'
            options={PRODUCT_TYPES}
            value={product.type}
            onChange={handleTypeChange}
            name={'type'}
          />
          <TextField
            defaultValue={product.price}
            name='price'
            type='number'
            label='Price'
            placeholder='Enter price...'
            onChange={handlePriceChange}
          />
        </fieldset>
        <Button variant={ButtonVariants.Primary}>{variants}</Button>
      </form>
    </div>
  );
};
