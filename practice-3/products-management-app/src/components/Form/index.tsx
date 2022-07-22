// Library
import React, { memo, useCallback, useRef, useState, FormEvent } from 'react';

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

export interface FormProps {
  variants: FormVariants;
  options?: ProductTypes[];
  productItem: Product;
  validateMessage: string;
  isDisableForm?: boolean;
  onSubmit: (product: Product) => void;
}

const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  validateMessage,
  isDisableForm = false,
  onSubmit
}) => {
  const [product, setProduct] = useState<Product>(productItem);
  const [isDisable, setIsDisable] = useState<boolean>(isDisableForm);

  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const handleEnableEditButton = useCallback(() => {
    setIsDisable(false);

    nameRef.current && nameRef.current.focus();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value || '';
    const type = typeRef.current?.value || '';
    const price = +(priceRef.current?.value || 0);
    const imageUrl = urlRef.current?.value || '';
    const updateProduct: Product = {
      id: product.id,
      name,
      type,
      price,
      imageUrl
    };

    onSubmit(updateProduct);

    setProduct(updateProduct);
  };

  return (
    <div className='form-wrapper'>
      {isDisable && (
        <a href='#' className='enable-edit' onClick={handleEnableEditButton}>
          Enable edit
        </a>
      )}
      <Title>{variants} Product</Title>
      <form
        className='form'
        name='form'
        onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}
      >
        <fieldset className='field-group'>
          <TextField
            defaultValue={productItem.name}
            name='name'
            label='Product name'
            placeholder='Enter productItem name...'
            type={TypeVariables.Text}
            readonly={isDisable}
            ref={nameRef}
          />
          <SelectItem
            label='Product type'
            options={options}
            defaultValue={productItem.type}
            name='type'
            disable={isDisable}
            ref={typeRef}
          />
          <TextField
            defaultValue={productItem.price}
            name='price'
            type={TypeVariables.Number}
            label='Price'
            placeholder='Enter price...'
            readonly={isDisable}
            ref={priceRef}
          />
          <TextField
            defaultValue={productItem.imageUrl}
            name='imageUrl'
            type={TypeVariables.Text}
            label='Image link'
            placeholder='Enter image link...'
            readonly={isDisable}
            ref={urlRef}
          />
          {validateMessage && (
            <Text variant={VariantsTypes.Highlight} color='var(--danger)'>
              {validateMessage}
            </Text>
          )}
        </fieldset>

        <Button
          variant={ButtonVariants.Primary}
          isDisabled={isDisable}
          onClick={() => undefined}
        >
          {variants}
        </Button>
      </form>
    </div>
  );
};

export default memo(Form);
