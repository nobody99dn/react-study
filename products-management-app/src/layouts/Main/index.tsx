// Library
import React, { memo, useCallback, useEffect, useState } from 'react';

// Styles
import "./index.css";

// Components
import Posts from '@components/Posts/index';
import SideBar from '../../components/SideBar/index';
import Search from '@components/SearchInput';

// Style
import './index.css';
import ModalForm from '@components/ModalForm';
import { Product } from '@type/product';

const Main: React.FC = () => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    type: '',
    price: 0,
    imageUrl: ''
  });

  const handleToggleModal = useCallback((product: Product) => {
    setIsModalShow(!isModalShow);
    setProduct(product);
  }, [isModalShow]);

  const handleCloseModal = useCallback(() => {
    setIsModalShow(!isModalShow);
  }, [isModalShow]);

  return (
    <main className='main'>
      <div className='right-container'>
        <div className='right-content'>
          <Search />
          <Posts handleOpenModalForm={handleToggleModal} />
        </div>
      </div>
      <div className='left-container'>
        <SideBar handleOpenModalForm={handleToggleModal} />
      </div>
      {isModalShow && <ModalForm
        isModalShow={isModalShow}
        product={product}
        handleCloseModal={handleCloseModal}
      />}
    </main >
  );
};

export default memo(Main);
