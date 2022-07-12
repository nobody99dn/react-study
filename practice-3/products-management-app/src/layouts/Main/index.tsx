// Library
import React, {
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import './index.css';

// Components
import Posts from '@components/Posts/index';
import SideBar from '@components/SideBar/index';
import SearchInput from '@components/SearchInput';
import ModalForm from '@components/ModalForm';

// Model
import { Product } from '@models/product';

// Constants
import { ERROR_MESSAGES } from '@constants/messages';
import { FilterOrderOptions, ProductTypes, URL } from '@constants/index';

// Hook
import useProducts from '@hooks/useProducts';

// Store
import { useStore } from '@store/index';

const Main: React.FC = () => {
  const { globalState } = useStore();

  const { products } = globalState || {};

  const navigate = useNavigate();

  const {
    getProducts,
    deleteProduct,
    createProduct,
    filterProducts,
    searchingProducts
  } = useProducts();

  // States
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
  const [currentFilterPriceParam, setCurrentFilterPriceParam] =
    useState<FilterOrderOptions | ''>('');
  const [currentFilterTypeParam, setCurrentFilterTypeParam] =
    useState<ProductTypes | ''>('');
  const [productName, setProductName] = useState<string>('');

  /**
   * Run first times when init app
   */
  useEffect(() => {
    getAllProducts();
  }, []);

  /**
   * Get all products
   */
  const getAllProducts = async (): Promise<void> => {
    getProducts();
  };

  /**
   * Handle delete product
   *
   * @param id string
   * @returns void
   */
  const handleDeleteProduct = async (id: string): Promise<void> => {
    deleteProduct(id);
  };

  /**
   * Handle create new product and edit product
   *
   * @param event FormEvent
   * @param product Product
   * @returns void
   */
  const handleCreateProduct = async (
    event: FormEvent,
    product: Product
  ): Promise<void> => {
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

    createProduct(product);

    setIsButtonLoading(false);
    setIsModalShow(false);
  };

  /**
   * Handle close modal
   */
  const handleCloseModal = (): void => {
    setIsModalShow(false);
  };

  const handleShowProductDetail = useCallback((productId: string) => {
    navigate(`${URL.DETAIL_PAGE}/${productId}`);
  }, []);

  const handleToggleModal = () => {
    setIsModalShow(!isModalShow);
    setProduct(product);
  };

  /**
   * Handle filter product
   */
  const handleClearFilters = useCallback(() => {
    setCurrentFilterPriceParam('');
    setCurrentFilterTypeParam('');

    getAllProducts();
  }, []);

  /**
   * Handle type change in filter
   */
  const handleTypeChange = useCallback(
    (value: string): void => {
      setCurrentFilterTypeParam(value as ProductTypes);
    },
    [currentFilterTypeParam]
  );

  /**
   * Handle price change in filter
   */
  const handlePriceChange = useCallback(
    (value: string): void => {
      setCurrentFilterPriceParam(value as FilterOrderOptions);
    },
    [currentFilterPriceParam]
  );

  /**
   *  Filter change
   **/
  useEffect(() => {
    const timer = setTimeout(() => {
      filterProducts(
        currentFilterTypeParam as ProductTypes,
        currentFilterPriceParam as FilterOrderOptions
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [currentFilterPriceParam, currentFilterTypeParam]);

  /**
   * Handle search input change
   */
  const handleSearchProduct = (value: string | number) => {
    setProductName(value as string);

    !value && getAllProducts();
  };

  /**
   * Handle search change
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      searchingProducts(productName);
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
            products={products}
            handleOpenProductDetail={handleShowProductDetail}
            handleDeleteProduct={handleDeleteProduct}
          />
        </div>
      </div>
      <div className='left-container'>
        <SideBar
          currentFilterTypeParam={currentFilterTypeParam}
          currentFilterPriceParam={currentFilterPriceParam}
          handleOpenModalForm={handleToggleModal}
          handleTypeChange={handleTypeChange}
          handlePriceChange={handlePriceChange}
          handleClearFilters={handleClearFilters}
        />
      </div>
      {isModalShow && (
        <ModalForm
          isModalShow={isModalShow}
          product={product}
          isButtonLoading={isButtonLoading}
          validateMessage={validateMessage}
          handleSubmitForm={handleCreateProduct}
          handleCloseModal={handleCloseModal}
        />
      )}
    </main>
  );
};

export default memo(Main);
