// Library
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Style
import './index.css';

// Constants
import { ButtonVariants, FormVariants, ProductTypes } from '@constants/types';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@constants/messages';

// Components
import Title from '@components/commons/Title';
import TextField from '@components/commons/TextField';
import Button from '@components/commons/Button';
import Select from '@components/commons/SelectItem';
import Text, { VariantsTypes } from '@components/commons/Text';

// Type
import { Product } from 'type/product';

// Store
import { addProductFailed, addProductSuccess, editProductFailed, editProductSuccess, useStore } from '@store/index';

// Service
import { addNewProduct, updateProduct } from '@services/product.service';

interface FormProps {
  variants: FormVariants;
  options?: ProductTypes[];
  productItem: Product;
  handleSubmit(): void;
}

const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  handleSubmit
}) => {
  const { globalState, dispatch } = useStore();

  const { error } = globalState || {};

  const [product, setProduct] = useState<Product>(productItem);

  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const handleOnChange = (value: string | number, fieldName: string): void => {
    setProduct({ ...product, [fieldName]: value });
  };

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    setIsButtonLoading(true);

    if (!productItem.id) {
      try {
        const newProduct: Product = await addNewProduct(product);

        if (!newProduct) {
          throw new Error(ERROR_MESSAGES.ADD_PRODUCT_FAILED);
        }

        dispatch(addProductSuccess({ product: newProduct, message: SUCCESS_MESSAGES.ADD_PRODUCT_SUCCESS }));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(addProductFailed(error.message));
          return;
        }
      }
    } else {
      try {
        const updatedProduct: Product = await updateProduct(product);
        if (!updatedProduct) {
          throw new Error(ERROR_MESSAGES.EDIT_PRODUCT_FAILED);
        }

        dispatch(editProductSuccess({ product: product, message: SUCCESS_MESSAGES.EDIT_PRODUCT_SUCCESS }));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(editProductFailed(error.message));
          return;
        }
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
          isLoading={isButtonLoading}
        />
      </form>
    </div>
  );
};

export default Form;
