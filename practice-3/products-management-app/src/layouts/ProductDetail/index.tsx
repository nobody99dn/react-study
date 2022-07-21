// Libraries
import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Image, Form, Title } from '@components/index';

// Models
import { Product } from '@models/product';

// Constants
import { ERROR_MESSAGES, PRODUCT_TYPE_LIST, URL } from '@constants/index';

// Styles
import './index.css';

// Hook
import useProducts from '@hooks/useProducts';

// Icon
import { BackIcon } from '@assets/index';

// Types
import { FormVariants, ImageVariants, VariantTypes } from '@common-types/index';

interface ProductDetailProps {
  product: Product;
  handleClearCurrent: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  handleClearCurrent
}) => {
  const { editProduct } = useProducts();

  const navigate = useNavigate();

  const [validateMessage, setValidateMessage] = useState<string>('');
  const [currentProduct, setCurrentProduct] = useState<Product>(product);

  /**
   * Handle create new product and edit product
   *
   * @param event FormEvent
   * @param product Product
   * @returns void
   */
  const handleSubmitEdit = useCallback((product: Product): void => {
    // Validate form
    if (!product.name) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_NAME_REQUIRED);

      return;
    } else if (!product.type) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_TYPE_REQUIRED);

      return;
    } else if (!product.price) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_PRICE_REQUIRED);

      return;
    } else if (!product.imageUrl) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_IMAGE_REQUIRED);

      return;
    }

    editProduct(product);

    // Update state
    setCurrentProduct(product);
  }, []);

  /**
   * Handle click back icon
   */
  const handleBack = useCallback(() => {
    handleClearCurrent();
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
          isDisableForm={true}
          handleSubmit={handleSubmitEdit}
        />
      </div>
    </div>
  );
};

export default memo(ProductDetail);
