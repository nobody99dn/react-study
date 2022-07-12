// Libraries
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import useProducts from '@hooks/useProducts';

// Layouts
import Header from '@layouts/Header';
import ProductDetail from '@layouts/ProductDetail';

// Constant
import { ERROR_MESSAGES } from '@constants/messages';

// Store
import { useStore, clearCurrentProduct } from '@store/index';

// Style
import './index.css';

// Components
import Text, { VariantsTypes } from '@components/commons/Text';

const DetailPage: React.FC = () => {
  const { globalState, dispatch } = useStore();

  const { getProductById } = useProducts();

  const { id } = useParams() as { id: string };

  const { currentProduct } = globalState;

  useEffect(() => {
    handleGetProduct();

    return () => {
      dispatch(clearCurrentProduct());
    };
  }, []);

  const handleGetProduct = async (): Promise<void> => {
    await getProductById(id);
  };

  return (
    <>
      <Header />

      {currentProduct ? (
        <ProductDetail product={currentProduct} />
      ) : (
        <div className='error-message'>
          <Text color='var(--danger)' variant={VariantsTypes.Highlight}>
            {ERROR_MESSAGES.PRODUCT_NOT_FOUND}
          </Text>
        </div>
      )}
    </>
  );
};

export default memo(DetailPage);
