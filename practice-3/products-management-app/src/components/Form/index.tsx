// Library
import React, { FormEvent, useState } from 'react';

// Style
import './index.css';

// Constants
import {
  ButtonVariants,
  FormVariants,
  ProductTypes,
  TypeVariables
} from '@constants/index';

// Components
import Title from '@components/commons/Title';
import TextField from '@components/commons/TextField';
import Button from '@components/commons/Button';
import Select from '@components/commons/SelectItem';
import Text, { VariantsTypes } from '@components/commons/Text';

// Model
import { Product } from '@models/product';

interface FormProps {
  variants: FormVariants;
  options?: ProductTypes[];
  productItem: Product;
  validateMessage: string;
  isButtonLoading?: boolean;
  onSubmit: (event: FormEvent, product: Product) => void;
  onChangeImage: (value: string) => void;
}

const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  validateMessage,
  isButtonLoading = false,
  onSubmit,
  onChangeImage
}) => {
  const [product, setProduct] = useState<Product>(productItem as Product);

  const handleOnChange = (
    value: string | number,
    fieldName: string | undefined
  ): void => {
    setProduct({ ...product, [fieldName as string]: value });

    if (fieldName === 'imageUrl') {
      onChangeImage(value as string);
    }
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
            type={TypeVariables.Text}
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
            type={TypeVariables.Number}
            label='Price'
            placeholder='Enter price...'
            onChange={handleOnChange}
          />
          <TextField
            defaultValue={product.imageUrl}
            name='imageUrl'
            type={TypeVariables.Text}
            label='Image link'
            placeholder='Enter image link...'
            onChange={handleOnChange}
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
          isLoading={isButtonLoading}
        />
      </form>
    </div>
  );
};

export default Form;
