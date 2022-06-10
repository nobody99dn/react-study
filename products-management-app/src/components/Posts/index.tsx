// Library
import React, { useEffect } from 'react';

// Components
import { Card } from '@components/commons/Card';
import { LoadingIndicator } from '@components/LoadingIndicator';

// Styles
import './index.css';

// Constants
import { Currencies } from '@constants/types';

// Helper
import { get } from '@helpers/clientRequests';

// Constants
import { URL_PRODUCTS } from '@constants/api';
import { ERROR_MESSAGES } from '@constants/messages';

// Models
import Product from '@models/product';

// Store
import { callApi, error, getProducts, useStore } from '@store/index';

type PostsProps = {};

export const Posts: React.FC<PostsProps> = ({ }) => {
  const { globalState, dispatch } = useStore();

  const { products, isLoading } = globalState;

  useEffect(() => {
    dispatch(callApi());

    const getAllProducts = async () => {
      try {
        const response = await get(URL_PRODUCTS);

        if (response instanceof Error) {
          throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
        }

        dispatch(getProducts(response));
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);

          dispatch(error(err.message));
        }
      }
    };

    getAllProducts();

  }, []);

  return (
    <div className='product-group'>
      {(isLoading
        && <div className='loading-container'><LoadingIndicator /></div>)
        || products
          .map((product: Product) => (
            <div className='products-row'>
              <Card
                title={product.name}
                type={product.type}
                price={product.price}
                imageUrl={product.imageUrl}
                currency={Currencies.VND}
              />
            </div>
          ))
      }
    </div>
  );
};
