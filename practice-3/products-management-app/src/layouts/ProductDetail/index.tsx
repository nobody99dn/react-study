// Library
import { FormEvent, memo, useState } from 'react';
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
  PRODUCT_TYPE_LIST,
  URL
} from '@constants/index';

// Style
import './index.css';

// Hook
import useProducts from '@hooks/useProducts';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { editProduct } = useProducts();

  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState<string>('');
  const [isLoadImageFail, setIsLoadImageFail] = useState<boolean>(false);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [validateMessage, setValidateMessage] = useState<string>('');

  const onChangeProductImage = (imageUrl: string) => {
    setIsLoadImageFail(false);
    setCurrentImage(imageUrl);
  };

  const handleImageError = () => {
    setIsLoadImageFail(true);
  };

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

    setIsButtonLoading(true);

    // Validate form
    if (!product.name) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_NAME_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    if (!product.type) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_TYPE_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    if (!product.price) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_PRICE_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    if (!product.imageUrl) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_IMAGE_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    editProduct(product);

    setIsButtonLoading(false);

    navigate(URL.HOME_PAGE);
  };

  return (
    <div className='product-detail'>
      <div className='product-image'>
        <Image
          alt='Product Image'
          imageUrl={currentImage}
          onImageError={handleImageError}
          isError={isLoadImageFail}
        />
        <Title variant={VariantTypes.Subtitle} children='Preview image' />
      </div>
      <div className='product-form'>
        <Form
          productItem={product}
          validateMessage={validateMessage}
          variants={FormVariants.Edit}
          options={PRODUCT_TYPE_LIST}
          isButtonLoading={isButtonLoading}
          isDisableForm={true}
          onSubmit={handleEditProduct}
          onChangeImage={onChangeProductImage}
        />
      </div>
    </div>
  );
};

export default memo(ProductDetail);
