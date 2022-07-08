import { memo, useState } from 'react';

// Components
import Image from '@components/commons/Image';
import Form from '@components/Form';
import { Product } from '@models/product';
import { FormVariants } from '@constants/index';
import Title, { VariantTypes } from '@components/commons/Title';
import './index.css';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [isLoadImageFail, setIsLoadImageFail] = useState<boolean>(false);

  const onChangeProductImage = (imageUrl: string) => {
    setIsLoadImageFail(false);
    setCurrentImage(imageUrl);
  };

  const handleImageError = () => {
    setIsLoadImageFail(true);
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
          validateMessage=''
          variants={FormVariants.Edit}
          onSubmit={() => {}}
          onChangeImage={onChangeProductImage}
        />
      </div>
    </div>
  );
};

export default memo(ProductDetail);
