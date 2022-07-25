// Libraries
import React, {
  memo,
  useCallback,
  useRef,
  useState,
  FormEvent,
  useEffect
} from 'react';

// Style
import './index.css';

// Constants
import { INIT_ERRORS, ProductTypes, ValidateError } from '@constants/index';

// Components
import { Title, TextField, Button, SelectItem, Text } from '@components/index';

// Model
import { Product } from '@models/product';

// Types
import {
  ButtonVariants,
  FormVariants,
  TextFieldVariants,
  TypeVariables,
  VariantsTypes
} from '@common-types/index';

// Helpers
import { validateProduct } from '@helpers/index';

// Utilities
import { areEqual } from '@utils/areEqual';

export interface FormProps {
  variants: FormVariants;
  options?: ProductTypes[];
  productItem: Product;
  isDisableForm?: boolean;
  onSubmit: (product: Product) => void;
}

const Form: React.FC<FormProps> = ({
  variants,
  productItem,
  options = [],
  isDisableForm = false,
  onSubmit
}) => {
  const [product, setProduct] = useState<Product>(productItem);
  const [isDisable, setIsDisable] = useState<boolean>(isDisableForm);
  const [formErrors, setFormErrors] = useState<ValidateError>(INIT_ERRORS);
  const [isSubmit, setIsSubmit] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  // Check formErrors and Submit
  useEffect(() => {
    isSubmit &&
      areEqual<ValidateError>(INIT_ERRORS, formErrors) &&
      onSubmit(product);
  }, [formErrors]);

  /**
   * Handle enable edit form
   */
  const handleEnableEditButton = useCallback(() => {
    setIsDisable(false);

    nameRef.current && nameRef.current.focus();
  }, []);

  /**
   * Handle click submit in form
   *
   * @param event FormEvent<HTMLFormElement>
   */
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
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

    // validate form
    setFormErrors(validateProduct(updateProduct));

    // Set current product
    setProduct(updateProduct);

    setIsSubmit(true);
  }, []);

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
          <div className='validate-message'>
            <Text
              variant={VariantsTypes.Highlight}
              color='var(--danger)'
              fontSize='12px'
            >
              {formErrors.name}
            </Text>
          </div>
          <SelectItem
            label='Product type'
            options={options}
            defaultValue={productItem.type}
            name='type'
            disable={isDisable}
            ref={typeRef}
          />
          <div className='validate-message'>
            <Text
              variant={VariantsTypes.Highlight}
              color='var(--danger)'
              fontSize='12px'
            >
              {formErrors.type}
            </Text>
          </div>
          <TextField
            defaultValue={productItem.price}
            name='price'
            type={TypeVariables.Number}
            label='Price'
            placeholder='Enter price...'
            readonly={isDisable}
            ref={priceRef}
          />
          <div className='validate-message'>
            <Text
              variant={VariantsTypes.Highlight}
              color='var(--danger)'
              fontSize='12px'
            >
              {formErrors.price}
            </Text>
          </div>
          <TextField
            defaultValue={productItem.imageUrl}
            name='imageUrl'
            type={TypeVariables.Text}
            label='Image link'
            placeholder='Enter image link...'
            readonly={isDisable}
            ref={urlRef}
          />
          <div className='validate-message'>
            <Text
              variant={VariantsTypes.Highlight}
              color='var(--danger)'
              fontSize='12px'
            >
              {formErrors.imageUrl}
            </Text>
          </div>
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
