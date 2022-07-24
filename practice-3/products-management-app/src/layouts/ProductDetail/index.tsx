// Libraries
import React, { memo, useCallback, useState } from 'react';
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
  onClearCurrent: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onClearCurrent
}) => {
  const { editProduct } = useProducts();

  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState<Product>(product);

  /**
   * Handle create new product and edit product
   *
   * @param event FormEvent
   * @param product Product
   * @returns void
   */
  const handleSubmitEdit = useCallback((product: Product): void => {
    editProduct(product);

    // Update state
    setCurrentProduct(product);
  }, []);

  /**
   * Handle click back icon
   */
  const handleBack = useCallback(() => {
    onClearCurrent();
    navigate(URL.HOME_PAGE);
  }, []);

  return (
    <div className='product-detail'>
      <div className='back-icon'>
        <Image
          alt='Back to Home Page'
          imageUrl={BackIcon}
          variant={ImageVariants.Icon}
          onClick={handleBack}
        />
      </div>
      <div className='product-image'>
        <Image alt='Product Image' imageUrl={currentProduct.imageUrl} />
        <Title variant={VariantTypes.Subtitle}>Preview image</Title>
      </div>
      <div className='product-form'>
        <Form
          productItem={currentProduct}
          variants={FormVariants.Edit}
          options={PRODUCT_TYPE_LIST}
          isDisableForm={true}
          onSubmit={handleSubmitEdit}
        />
      </div>
    </div>
  );
};

export default memo(ProductDetail);
