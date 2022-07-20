// Libraries
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
import { Posts, SearchInput, ModalForm, Layout } from '@components/index';

// Layout
import SideBar from '@layouts/SideBar/index';

// Models
import { Product } from '@models/product';

// Constants
import {
  FilterOrderOptions,
  ProductTypes,
  ERROR_MESSAGES,
  URL
} from '@constants/index';

// Hooks
import useProducts from '@hooks/useProducts';

// Store
import { useStore } from '@store/index';

const Main: React.FC = () => {
  const { globalState } = useStore();

  const { products } = globalState || {};

  const navigate = useNavigate();

  const { deleteProduct, createProduct, filterProducts, searchingProducts } =
    useProducts();

  // States
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [validateMessage, setValidateMessage] = useState<string>('');
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

    // Validate form
    if (!product.name) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_NAME_REQUIRED);

      return;
    }

    if (!product.type) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_TYPE_REQUIRED);

      return;
    }

    if (!product.price) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_PRICE_REQUIRED);

      return;
    }

    if (!product.imageUrl) {
      setValidateMessage(ERROR_MESSAGES.PRODUCT_IMAGE_REQUIRED);

      return;
    }

    createProduct(product);

    setIsModalShow(false);
  };

  /**
   * Handle close modal
   */
  const handleCloseModal = useCallback((): void => {
    setIsModalShow(false);
  }, []);

  const handleNavigateProductDetail = useCallback((productId: string) => {
    navigate(`${URL.DETAIL_PAGE}/${productId}`);
  }, []);

  const handleToggleModal = useCallback(() => {
    setIsModalShow(!isModalShow);
    setProduct(product);
  }, []);

  /**
   * Handle filter product
   */
  const handleClearFilters = useCallback(() => {
    setCurrentFilterPriceParam('');
    setCurrentFilterTypeParam('');
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
    <Layout>
      <div className='right-container'>
        <div className='right-content'>
          <SearchInput
            productName={productName}
            handleSearchProduct={handleSearchProduct}
          />
          <Posts
            products={products}
            handleNavigate={handleNavigateProductDetail}
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
          validateMessage={validateMessage}
          handleSubmitForm={handleCreateProduct}
          handleCloseModal={handleCloseModal}
        />
      )}
    </Layout>
  );
};

export default memo(Main);
