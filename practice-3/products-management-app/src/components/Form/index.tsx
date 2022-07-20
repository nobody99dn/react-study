// Library
import React, { FormEvent, useCallback, useRef, useState } from 'react';

// Style
import './index.css';

// Constants
import { ProductTypes } from '@constants/index';

// Components
import { Title, TextField, Button, SelectItem, Text } from '@components/index';

// Model
import { Product } from '@models/product';
import {
  ButtonVariants,
  FormVariants,
  TypeVariables,
  VariantsTypes
} from '@common-types/index';

interface FormProps {
  variants: FormVariants;
  options?: ProductTypes[];
  productItem: Product;
  validateMessage: string;
  isDisableForm?: boolean;
  handleSubmit: (product: Product) => void;
}

const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  validateMessage,
  isDisableForm = false,
  handleSubmit
}) => {
  const [product, setProduct] = useState<Product>(productItem);
  const [isDisable, setIsDisable] = useState<boolean>(isDisableForm);

  const nameRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (value: string | number, fieldName: string): void => {
    setProduct({ ...product, [fieldName as string]: value });
  };

  const handleEnableEditButton = useCallback(() => {
    setIsDisable(false);

    nameRef.current && nameRef.current.focus();
  }, []);

  const handleClick = useCallback(() => {
    handleSubmit(product);
  }, [product]);

  return (
    <div className='form-wrapper'>
      {isDisable && (
        <a href='#' className='enable-edit' onClick={handleEnableEditButton}>
          Enable edit
        </a>
      )}
      <Title>{variants} Product</Title>
      <fieldset className='field-group'>
        <TextField
          defaultValue={product.name}
          name='name'
          label='Product name'
          placeholder='Enter product name...'
          type={TypeVariables.Text}
          readonly={isDisable}
          handleInputChange={handleOnChange}
          ref={nameRef}
        />
        <SelectItem
          label='Product type'
          options={options}
          value={product.type}
          handleSelectChange={handleOnChange}
          name='type'
          disable={isDisable}
        />
        <TextField
          defaultValue={product.price}
          name='price'
          type={TypeVariables.Number}
          label='Price'
          placeholder='Enter price...'
          readonly={isDisable}
          handleInputChange={handleOnChange}
        />
        <TextField
          defaultValue={product.imageUrl}
          name='imageUrl'
          type={TypeVariables.Text}
          label='Image link'
          placeholder='Enter image link...'
          readonly={isDisable}
          handleInputChange={handleOnChange}
        />
        {validateMessage && (
          <Text variant={VariantsTypes.Highlight} color='var(--danger)'>
            {validateMessage}
          </Text>
        )}
      </fieldset>

      <Button
        variant={ButtonVariants.Primary}
        title={variants}
        isDisabled={isDisable}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Form;
