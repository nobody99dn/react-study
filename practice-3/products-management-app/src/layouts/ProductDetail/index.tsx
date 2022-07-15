// Library
import { FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Image from '@components/commons/Image';
import Form from '@components/Form';
import Title, { VariantTypes } from '@components/commons/Title';

// Model
import { Product } from '@models/product';

// Constant
import {
  ERROR_MESSAGES,
  FormVariants,
  ImageVariants,
  PRODUCT_TYPE_LIST,
  URL
} from '@constants/index';

// Style
import './index.css';

// Hook
import useProducts from '@hooks/useProducts';

// Icon
import { BackIcon } from '@assets/index';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { editProduct } = useProducts();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validateMessage, setValidateMessage] = useState<string>('');
  const [currentProduct, setCurrentProduct] = useState<Product>(product);

  /**
   * Handle create new product and edit product
   *
   * @param event FormEvent
   * @param product Product
   * @returns void
   */
  const handleEditProduct = async (
    event: FormEvent,
    product: Product
  ): Promise<void> => {
    event.preventDefault();

    setIsLoading(true);

    // Validate form
    if (!product.name) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_NAME_REQUIRED);
      setIsLoading(false);

      return;
    } else if (!product.type) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_TYPE_REQUIRED);
      setIsLoading(false);

      return;
    } else if (!product.price) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_PRICE_REQUIRED);
      setIsLoading(false);

      return;
    } else if (!product.imageUrl) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_IMAGE_REQUIRED);
      setIsLoading(false);

      return;
    }

    editProduct(product);

    setIsLoading(false);

    // Update state
    setCurrentProduct(product);
  };

  /**
   * Handle click back icon
   */
  const handleBack = useCallback(() => {
    navigate(URL.HOME_PAGE);
  }, []);

  return (
    <div className='product-detail'>
      <div className='back-icon'>
        <Image
          alt='Back to Home Page'
          imageUrl={BackIcon}
          variant={ImageVariants.Icon}
          handleClick={handleBack}
        />
      </div>
      <div className='product-image'>
        <Image alt='Product Image' imageUrl={currentProduct.imageUrl} />
        <Title variant={VariantTypes.Subtitle} children='Preview image' />
      </div>
      <div className='product-form'>
        <Form
          productItem={currentProduct}
          validateMessage={validateMessage}
          variants={FormVariants.Edit}
          options={PRODUCT_TYPE_LIST}
          isButtonLoading={isLoading}
          isDisableForm={true}
          onSubmit={handleEditProduct}
        />
      </div>
    </div>
  );
};

export default memo(ProductDetail);
