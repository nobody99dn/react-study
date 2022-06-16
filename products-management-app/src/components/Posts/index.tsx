// Library
import React, { useEffect } from 'react';

// Components
import Card from '@components/commons/Card';

// Styles
import './index.css';

// Constants
import { Currencies } from '@constants/types';
import { ERROR_MESSAGES } from '@constants/messages';

// Type
import { Product } from 'type/product';

// Store
import { useStore, getProductsRequest, getProductsSuccess, getProductsFailed } from '@store/index';

// Service
import { getAllProduct } from '@services/product.service';

interface PostsProps {
  handleOpenModalForm: (product: Product) => void;
}

const Posts: React.FC<PostsProps> = ({ handleOpenModalForm }) => {
  const { globalState, dispatch } = useStore();

  const { products, filterBox } = globalState || {};

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      dispatch(getProductsRequest());

      const products: Product[] = await getAllProduct();

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
    <div className='product-group'>
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
          )) || null
      }
    </div>
  );
};

export default Posts;
