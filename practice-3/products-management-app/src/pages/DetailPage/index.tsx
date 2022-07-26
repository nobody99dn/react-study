// Libraries
import React, { lazy, memo, Suspense, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Layouts
const ProductDetail = lazy(() => import('@layouts/ProductDetail'));

// Store
import { clearCurrentProduct, useStore } from '@store/index';

// Styles
import './index.css';

// Components
import { LoadingIndicator, Text } from '@components/index';
const Layout = lazy(() => import('@components/Layout'));

// Constants
import { ERROR_MESSAGES } from '@constants/index';

// Types
import { VariantsTypes } from '@common-types/index';

// Hooks
import useProducts from '@hooks/useProducts';

const DetailPage: React.FC = () => {
  const { globalState, dispatch } = useStore();

  const { id } = useParams<string>();

  const { getProductById, productIsValidating } = useProducts(id);

  const { currentProduct } = globalState;

  useEffect(() => {
    if (!productIsValidating) {
      getProductById();
    }
  }, [productIsValidating]);

  const handleClearCurrent = useCallback(() => {
    dispatch(clearCurrentProduct());
  }, []);

  return (
    <Suspense fallback={<LoadingIndicator />}>
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
    </Suspense>
  );
};

export default memo(DetailPage);
