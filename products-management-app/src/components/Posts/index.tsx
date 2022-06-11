// Library
import React, { useEffect, useState } from 'react';

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

  const [isModalShow, setIsModalShow] = useState(true);

  const { products, loading, error } = globalState;

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
          dispatch(errorAction(err.message));
        }
      }
    };

    getAllProducts();

  }, []);

  const handleCloseModal = () => {
    setIsModalShow(false);
  };

  return (
    <div className='product-group'>
      {loading
        ? <div className='loading-container'><LoadingIndicator /></div>
        : error !== null
          ? <Modal
            handleClose={handleCloseModal}
            show={isModalShow}>
            {error}
          </Modal>
          : products
            .map((product: Product) => (
              <div
                className='products-row'
                key={product.id}
              >
                <Card
                  product={product}
                  currency={Currencies.VND}
                />
              </div>
            ))
      }
    </div>
  );
};
