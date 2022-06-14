// Library
import React, { useCallback, useEffect, useState } from 'react';

// Components
import Card from '@components/commons/Card';
import LoadingIndicator from '@components/LoadingIndicator';
import Modal from '@components/Modal';

// Styles
import './index.css';

// Constants
import { Currencies } from '@constants/types';

// Helper
import { get } from '@helpers/clientRequests';

// Constants
import { URL_PRODUCTS } from '@constants/api';
import { ERROR_MESSAGES } from '@constants/messages';

// Types
import { Product } from 'type/product';

// Store
import { useStore, getProductsRequest, getProductsSuccess, getProductsFailed } from '@store/index';
import Text, { VariantsTypes } from '@components/commons/Text';

interface PostsProps {
  handleOpenModalForm: (product: Product) => void;
}

const Posts: React.FC<PostsProps> = ({ handleOpenModalForm }) => {
  const { globalState, dispatch } = useStore();

  const { products, isLoading, errorMessage, filterBox } = globalState || {};

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      dispatch(getProductsRequest());

      const products: Product[] = await get(URL_PRODUCTS);

      if (!products.length) {
        throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
      }

      dispatch(getProductsSuccess(products));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(getProductsFailed(err.message));
      }
    }
  };

  return (
    <div className='posts-container'>
      <div className='product-group'>
        {isLoading && <LoadingIndicator />}
        {
          errorMessage &&
          <Text
            variant={VariantsTypes.Highlight}
            color='var(--danger)'>
            {errorMessage}
          </Text>
        }
        {(filterBox || products.length) &&
          (filterBox || products)
            .map((product: Product) => (
              <div
                className='products-row'
                key={product.id}
              >
                <Card
                  product={product}
                  currency={Currencies.VND}
                  handleOpenModalForm={handleOpenModalForm}
                />
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Posts;
