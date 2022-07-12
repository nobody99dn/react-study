// Libraries
import React, { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
import { URL } from '@constants/routes';

const DetailPage: React.FC = () => {
  const { globalState, dispatch } = useStore();

  const { getProductById } = useProducts();

  const { id } = useParams<{ id: string }>();

  const { currentProduct } = globalState;

  const navigate = useNavigate();

  useEffect(() => {
    handleGetProduct();

    return () => {
      dispatch(clearCurrentProduct());
    };
  }, []);

  const handleGetProduct = async (): Promise<void> => {
    if (id) {
      await getProductById(id);
    } else {
      navigate(URL.HOME_PAGE);
    }
  };

  return (
    <>
      <Header />
      {currentProduct && <ProductDetail product={currentProduct} />}
      {!currentProduct && (
        <ProductDetail
          product={{ id: '', imageUrl: '', name: '', price: 0, type: '' }}
        />
      )}
    </>
  );
};

export default memo(DetailPage);
