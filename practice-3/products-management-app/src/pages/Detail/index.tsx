// Libraries
import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import useProducts from '@hooks/useProducts';

// Layouts
import Header from '@layouts/Header';
import ProductDetail from '@layouts/ProductDetail';

// Constant
import { ERROR_MESSAGES } from '@constants/messages';

// Store
import { useStore } from '@store/store';

// Style
import './index.css';

// Component
import Text, { VariantsTypes } from '@components/commons/Text';

const Detail: React.FC = () => {
  const { globalState } = useStore();

  const { getProductById } = useProducts();

  const { id } = useParams() as { id: string };

  const { currentProduct } = globalState;

  useEffect(() => {
    const getProduct = async (): Promise<void> => {
      await getProductById(id);
    };

    getProduct();
  }, []);

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

export default memo(Detail);
