// Library
import React, { FormEvent, memo, useCallback, useEffect, useState } from 'react';

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
import { Product } from '@models/product';

// Store
import {
  useStore,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailed,
  deleteProductFailed,
  deleteProductSuccess,
  addProductFailed,
  addProductSuccess,
  editProductFailed,
  editProductSuccess
} from '@store/index';

// Service
import { removeProduct } from '@services/product.service';

// Service
import { getAllProduct } from '@services/product.service';

// Constants
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@constants/messages';

// Service
import { addNewProduct, updateProduct } from '@services/product.service';

const Main: React.FC = () => {
  const { globalState, dispatch } = useStore();

  const { products, filterBox } = globalState || {};

  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [validateMessage, setValidateMessage] = useState<string>('');
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    type: '',
    price: 0,
    imageUrl: ''
  });

  /**
   * Get all products
   */
  const getAllProducts = async (): Promise<void> => {
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

  /**
   * Run first times when init app
   */
  useEffect(() => {
    getAllProducts();
  }, []);

  /**
   * Handle delete product
   * 
   * @param id string
   * @returns void
   */
  const handleDeleteProduct = async (id: string): Promise<void> => {
    try {
      const deletedProduct: Product = await removeProduct(id);

      if (!deletedProduct) {
        throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
      }

      dispatch(deleteProductSuccess({
        productId: deletedProduct.id,
        message: SUCCESS_MESSAGES.REMOVE_PRODUCT_SUCCESS
      }));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(deleteProductFailed(error.message));
        return;
      }
    }

  };

  /**
   * Handle create new product and edit product
   * 
   * @param event FormEvent
   * @param product Product
   * @returns void
   */
  const handleSubmitProduct = async (event: FormEvent, product: Product) => {
    event.preventDefault();

    setIsButtonLoading(true);

    // Validate form
    if (!product.name) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_NAME_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    if (!product.type) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_TYPE_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    if (!product.price) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_PRICE_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    if (!product.imageUrl) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_IMAGE_REQUIRED);
      setIsButtonLoading(false);

      return;
    }

    if (!product.id) {
      try {
        const newProduct: Product = await addNewProduct(product);

        if (!newProduct) {
          throw new Error(ERROR_MESSAGES.ADD_PRODUCT_FAILED);
        }

        dispatch(addProductSuccess({ product: newProduct, message: SUCCESS_MESSAGES.ADD_PRODUCT_SUCCESS }));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(addProductFailed(error.message));
          return;
        }
      }
    } else {
      try {
        const updatedProduct: Product = await updateProduct(product);
        if (!updatedProduct) {
          throw new Error(ERROR_MESSAGES.EDIT_PRODUCT_FAILED);
        }

        dispatch(editProductSuccess({ product: product, message: SUCCESS_MESSAGES.EDIT_PRODUCT_SUCCESS }));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(editProductFailed(error.message));
          return;
        }
      }
    }

    setIsButtonLoading(false);
    setIsModalShow(false);
  };

  const handleCloseModal = () => {
    setIsModalShow(false);
  };

  const handleToggleModal = useCallback((product: Product = {
    id: '',
    name: '',
    type: '',
    price: 0,
    imageUrl: ''
  }) => {

    setIsModalShow(!isModalShow);
    setProduct(product);
  }, []);

  return (
    <main className='main'>
      <div className='right-container'>
        <div className='right-content'>
          <SearchInput />
          <Posts
            products={filterBox || products}
            onOpenModalForm={handleToggleModal}
            onDeleteProduct={handleDeleteProduct}
          />
        </div>
      </div>
      <div className='left-container'>
        <SideBar handleOpenModalForm={handleToggleModal} />
      </div>
      {isModalShow && <ModalForm
        isModalShow={isModalShow}
        product={product}
        isButtonLoading={isButtonLoading}
        validateMessage={validateMessage}
        handleSubmitForm={handleSubmitProduct}
        handleCloseModal={handleCloseModal}
      />}
    </main >
  );
};

export default memo(Main);
