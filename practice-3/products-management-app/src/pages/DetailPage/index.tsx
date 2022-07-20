// Libraries
import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Hooks
import useProductById from '@hooks/useProductById';

// Layouts
import ProductDetail from '@layouts/ProductDetail';

// Store
import { useStore } from '@store/index';

// Styles
import './index.css';

// Components
import { Layout, Text } from '@components/index';

// Constants
import { ERROR_MESSAGES } from '@constants/index';

// Types
import { VariantsTypes } from '@common-types/index';

const DetailPage: React.FC = () => {
  const { globalState } = useStore();

  const { id } = useParams() as { id: string };

  const { getProduct, isValidating } = useProductById(id);

  const { currentProduct } = globalState;

  useEffect(() => {
    if (!isValidating) {
      getProduct();
    }
  }, [isValidating]);

  return (
    <Layout>
      {currentProduct ? (
        <ProductDetail product={currentProduct} />
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
