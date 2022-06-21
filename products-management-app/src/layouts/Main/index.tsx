// Library
import React,
{
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useState
} from 'react';

// Styles
import "./index.css";

// Components
import Posts from '@components/Posts/index';
import SideBar from '@components/SideBar/index';
import SearchInput from '@components/SearchInput';
import ModalForm from '@components/ModalForm';

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
  editProductSuccess,
  filterProductsRequest,
  filterProductsSuccess,
  searchProductsSuccess
} from '@store/index';

// Service
import { removeProduct, getAllProduct, addNewProduct, updateProduct } from '@services/product.service';

// Constants
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@constants/messages';
import { FilterOrderOptions, ProductTypes } from '@constants/types';

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
  const [currentFilterPriceParam, setCurrentFilterPriceParam] = useState<FilterOrderOptions>();
  const [currentFilterTypeParam, setCurrentFilterTypeParam] = useState<ProductTypes>();
  const [productName, setProductName] = useState<string>('');

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

  // Handle filter product
  const handleClearFilters = useCallback(() => {
    setCurrentFilterPriceParam(undefined);
    setCurrentFilterTypeParam(undefined);
  }, [currentFilterTypeParam, currentFilterPriceParam]);

  const handleTypeChange = useCallback((value: string): void => {
    setCurrentFilterTypeParam(value as ProductTypes);
  }, [currentFilterTypeParam]);

  const handlePriceChange = useCallback((value: string): void => {
    setCurrentFilterPriceParam(value as FilterOrderOptions);
  }, [currentFilterPriceParam]);

  // Filter change
  useEffect(() => {
    dispatch(filterProductsRequest());
    const timer = setTimeout(() => {
      dispatch(
        filterProductsSuccess({
          currentFilterTypeParam,
          currentFilterPriceParam
        })
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [currentFilterPriceParam, currentFilterTypeParam]);

  const handleSearchProduct = (value: string | number) => {
    setProductName(value as string);
  };

  // Search change
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchProductsSuccess({ productName }));
    }, 500);

    return () => clearTimeout(timer);
  }, [productName]);

  return (
    <main className='main'>
      <div className='right-container'>
        <div className='right-content'>
          <SearchInput
            productName={productName}
            handleSearchProduct={handleSearchProduct}
          />
          <Posts
            products={filterBox || products}
            onOpenModalForm={handleToggleModal}
            onDeleteProduct={handleDeleteProduct}
          />
        </div>
      </div>
      <div className='left-container'>
        <SideBar
          handleOpenModalForm={handleToggleModal}
          currentFilterTypeParam={currentFilterTypeParam}
          currentFilterPriceParam={currentFilterPriceParam}
          handleTypeChange={handleTypeChange}
          handlePriceChange={handlePriceChange}
          handleClearFilters={handleClearFilters}
        />
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
