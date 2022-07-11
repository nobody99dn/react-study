// Library
import React, {
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';

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
  isDisableForm?: boolean;
  onSubmit: (event: FormEvent, product: Product) => void;
  onChangeImage?: (value: string) => void;
}

const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  validateMessage,
  isButtonLoading = false,
  isDisableForm = false,
  onSubmit,
  onChangeImage
}) => {
  const [product, setProduct] = useState<Product>(productItem as Product);
  const [isDisable, setIsDisable] = useState<boolean>(isDisableForm);

  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChangeImage && onChangeImage(product.imageUrl);
  }, []);

  const handleOnChange = (
    value: string | number,
    fieldName: string | undefined
  ): void => {
    setProduct({ ...product, [fieldName as string]: value });

    if (fieldName === 'imageUrl') {
      onChangeImage && onChangeImage(value as string);
    }
  };

  const handleEnableEditButton = () => {
    setIsDisable(false);

    nameRef.current && nameRef.current.focus();
  };

  return (
    <div className='form-wrapper'>
      <Title>{variants} Product</Title>
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
            type={TypeVariables.Text}
            readonly={isDisable}
            onChange={handleOnChange}
            ref={nameRef}
          />
          <Select
            label='Product type'
            options={options}
            value={product.type}
            onChange={handleOnChange}
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
            onChange={handleOnChange}
          />
          <TextField
            defaultValue={product.imageUrl}
            name='imageUrl'
            type={TypeVariables.Text}
            label='Image link'
            placeholder='Enter image link...'
            readonly={isDisable}
            onChange={handleOnChange}
          />
          {validateMessage && (
            <Text variant={VariantsTypes.Highlight} color='var(--danger)'>
              {validateMessage}
            </Text>
          )}
        </fieldset>
        {!isDisable && (
          <Button
            variant={ButtonVariants.Primary}
            title={variants}
            isLoading={isButtonLoading}
            isDisabled={isDisable}
          />
        )}
        {isDisable && (
          <Button
            title='Enable Edit'
            variant={ButtonVariants.Default}
            onClick={handleEnableEditButton}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
