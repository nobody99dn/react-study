// Library
import React, { useCallback, useEffect, useState } from 'react';

// Components
import { Card } from '@components/commons/Card';
import { LoadingIndicator } from '@components/LoadingIndicator';
import { Modal } from '@components/Modal';

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
import { callApi, getProducts, useStore, error as errorAction } from '@store/index';

type PostsProps = {};

export const Posts: React.FC<PostsProps> = ({ }) => {
  const { globalState, dispatch } = useStore();

  const [isModalShow, setIsModalShow] = useState<boolean>(true);

  const { products, isLoading, errorMessage } = globalState || {};

  useEffect(() => {
    dispatch(callApi());

    const getAllProducts = async () => {
      try {
        const products: Product[] = await get(URL_PRODUCTS);

        if (!products.length) {
          throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
        }

        dispatch(getProducts(products));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(errorAction(err.message));
        }
      }
    };

    getAllProducts();

  }, []);

  const toggleModal = useCallback(() => {
    setIsModalShow(!isModalShow);
  }, [isModalShow]);

  return (
    <div className='product-group'>
      {isLoading && <LoadingIndicator />}
      {
        errorMessage ?
          <Modal
            handleClose={toggleModal}
            isVisible={isModalShow}
          >
            {errorMessage}
          </Modal>
          :
          products.length &&
          products.map((product: Product) => (
            <div
              className='products-row'
              key={product.id}
            >
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
