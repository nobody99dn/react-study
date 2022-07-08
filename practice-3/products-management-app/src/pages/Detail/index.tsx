// Libraries
import useProducts from '@hooks/useProducts';
import Header from '@layouts/Header';
import ProductDetail from '@layouts/ProductDetail';
import { Product } from '@models/product';
import React, { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ERROR_MESSAGES } from '@constants/messages';
import './index.css';

const Detail: React.FC = () => {
  const { id } = useParams() as { id: string };

  const { getProductById } = useProducts();

  const [currentProduct, setCurrentProduct] = useState<Product | undefined>();

  useEffect(() => {
    const getProduct = async (): Promise<void> => {
      const product: Product | undefined = await getProductById(id);

      setCurrentProduct(product);
    };

    getProduct();
  }, []);

  return (
    <>
      <Header />

      {currentProduct ? (
        <ProductDetail product={currentProduct} />
      ) : (
        <div>{ERROR_MESSAGES.PRODUCT_NOT_FOUND}</div>
      )}
    </>
  );
};

export default memo(Detail);
