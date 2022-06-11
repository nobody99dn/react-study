// Library
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Style
import './index.css';

// Constants
import { ButtonVariants, FormVariants, ProductTypes } from '@constants/types';
import { ERROR_MESSAGES } from '@constants/messages';

// Components
import { Title } from '@components/commons/Title';
import { TextField } from '@components/commons/TextField';
import { Button } from '@components/commons/Button';
import { Select } from '@components/commons/Select';
import { Text, VariantsTypes } from '@components/commons/Text';

// Type
import { Product } from 'type/product';

// Store
import { addProduct, editProduct, error as errorAction, useStore } from '@store/index';

// Service
import { addNewProduct, updateProduct } from '@services/product.service';

interface FormProps {
  variants: FormVariants;
  options?: ProductTypes[];
  productItem: Product;
  handleSubmit(): void;
}

export const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  handleSubmit
}) => {
  const { globalState, dispatch } = useStore();

  const { error } = globalState;

  const [product, setProduct] = useState<Product>(productItem);

  const handleNameChange = (value: string | number): void => {
    setProduct({ ...product, name: value as string });
  };

  const handlePriceChange = (value: string | number): void => {
    setProduct({ ...product, price: value as number });
  };

  const handleTypeChange = (value: string | number): void => {
    setProduct({ ...product, type: value as string });
  };

  const handleImageChange = (value: string | number): void => {
    setProduct({ ...product, imageUrl: value as string });
  };

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (!productItem.id) {
        const newProduct: Product = await addNewProduct(product);

        if (!newProduct) {
          throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
        }

        dispatch(addProduct(newProduct));
      } else {
        const updatedProduct: Product = await updateProduct(product);
        if (!updatedProduct) {
          throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
        }

        dispatch(editProduct(product));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(errorAction(error.message));
        return;
      }
    }

    handleSubmit();
  };


  return (
    <div className='form-wrapper'>
      <Title>{variants} Form</Title>
      <form className='form' onSubmit={handleSubmitForm}>
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
            options={options}
            value={product.type}
            onChange={handleTypeChange}
            name='type'
          />
          <TextField
            defaultValue={product.price}
            name='price'
            type='number'
            label='Price'
            placeholder='Enter price...'
            onChange={handlePriceChange}
          />
          <TextField
            defaultValue={product.imageUrl}
            name='Image link'
            type='text'
            label='Image link'
            placeholder='Enter image link...'
            onChange={handleImageChange}
          />
          {error &&
            <Text
              variant={VariantsTypes.Highlight}
              color='var(--danger)'>
              {error}
            </Text>
          }
        </fieldset>
        <Button
          variant={ButtonVariants.Primary}
          title={variants}
        />
      </form>
    </div>
  );
};
