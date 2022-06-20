// Library
import React, { FormEvent, useEffect, useState } from 'react';

// Style
import './index.css';

// Constants
import { ButtonVariants, FormVariants, ProductTypes } from '@constants/types';

// Components
import Title from '@components/commons/Title';
import TextField from '@components/commons/TextField';
import Button from '@components/commons/Button';
import Select from '@components/commons/SelectItem';
import Text, { VariantsTypes } from '@components/commons/Text';

// Type
import { Product } from '@models/product';

interface FormProps {
  variants: FormVariants;
  options?: ProductTypes[];
  productItem: Product;
  validateMessage: string;
  isButtonLoading: boolean;
  onSubmit(event: FormEvent, product: Product): void;
}

const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  validateMessage,
  isButtonLoading = false,
  onSubmit
}) => {

  const [product, setProduct] = useState<Product>(productItem as Product);

  const handleOnChange = (value: string | number, fieldName: string): void => {
    setProduct({ ...product, [fieldName]: value });
  };

  return (
    <div className='form-wrapper'>
      <Title>{variants} Form</Title>
      <form
        className='form'
        onSubmit={(event: FormEvent) => onSubmit(event, product)}
      >
        <fieldset className='field-group'>
          <TextField
            defaultValue={product.name}
            name='name'
            label='Product name'
            placeholder='Enter product name...'
            onChange={handleOnChange}
          />
          <Select
            label='Product type'
            options={options}
            value={product.type}
            onChange={handleOnChange}
            name='type'
          />
          <TextField
            defaultValue={product.price}
            name='price'
            type='number'
            label='Price'
            placeholder='Enter price...'
            onChange={handleOnChange}
          />
          <TextField
            defaultValue={product.imageUrl}
            name='imageUrl'
            type='text'
            label='Image link'
            placeholder='Enter image link...'
            onChange={handleOnChange}
          />
          {validateMessage &&
            <Text
              variant={VariantsTypes.Highlight}
              color='var(--danger)'>
              {validateMessage}
            </Text>
          }
        </fieldset>
        <Button
          variant={ButtonVariants.Primary}
          title={variants}
          isLoading={isButtonLoading}
        />
      </form>
    </div>
  );
};

export default Form;
