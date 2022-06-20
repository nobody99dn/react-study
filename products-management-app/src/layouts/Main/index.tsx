// Library
import React, { memo, useCallback, useState } from 'react';

// Styles
import "./index.css";

// Components
import Posts from '@components/Posts/index';
import SideBar from '@components/SideBar/index';
import SearchInput from '@components/SearchInput';
import ModalForm from '@components/ModalForm';

// Style
import './index.css';

// Type
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
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalShow(false);
  }, []);

  return (
    <main className='main'>
      <div className='right-container'>
        <div className='right-content'>
          <SearchInput />
          <Posts onOpenModalForm={handleToggleModal} />
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
