// Libraries
import React, { memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import useProductById from '@hooks/useProductById';

// Layouts
import ProductDetail from '@layouts/ProductDetail';

// Store
import { clearCurrentProduct, useStore } from '@store/index';

// Styles
import './index.css';

// Components
import { Layout, Text } from '@components/index';

// Constants
import { ERROR_MESSAGES } from '@constants/index';

// Types
import { VariantsTypes } from '@common-types/index';

const DetailPage: React.FC = () => {
  const { globalState, dispatch } = useStore();

  const { id } = useParams() as { id: string };

  const { getProduct, isValidating } = useProductById(id);

  const { currentProduct } = globalState;

  useEffect(() => {
    if (!isValidating) {
      getProduct();
    }
  }, [isValidating]);

  const handleClearCurrent = useCallback(() => {
    dispatch(clearCurrentProduct());
  }, []);

  return (
    <Layout>
      {currentProduct ? (
        <ProductDetail
          product={currentProduct}
          onClearCurrent={handleClearCurrent}
        />
      ) : (
        <div className='error-message'>
          <Text color='var(--danger)' variant={VariantsTypes.Highlight}>
            {ERROR_MESSAGES.PRODUCT_NOT_FOUND}
          </Text>
        </div>
      )}
    </Layout>
  );
};

export default memo(DetailPage);
