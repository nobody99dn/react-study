// Constant
import { URL_PRODUCTS } from '@constants/api';
import { FilterOrderOptions, ProductTypes } from '@constants/index';

// Helper
import { get, post, remove, update } from '@helpers/clientRequests';

// Model
import { Product } from '@models/product';

/**
 * Get all product from database and save in local
 *
 * @returns Product[]
 */
const getAllProduct = async (): Promise<Product[]> => {
  return await get(URL_PRODUCTS);
};

/**
 * Add new product in database and call action in local
 *
 * @param product Product
 * @returns Product
 */
const addNewProduct = async (product: Product): Promise<Product> => {
  return await post(URL_PRODUCTS, product);
};

/**
 * Remove Product in database and call action in local
 *
 * @param id string
 * @returns Product
 */
const removeProduct = async (id: string): Promise<Product> => {
  return await remove(`${URL_PRODUCTS}/${id}`);
};

/**
 * Update product in database and call action in local
 *
 * @param product Product
 * @returns Product
 */
const updateProduct = async (product: Product): Promise<Product> => {
  return await update(`${URL_PRODUCTS}/${product.id}`, product);
};

const filterProductsByTypeAndPrice = async (
  type: ProductTypes,
  priceOrder: FilterOrderOptions
): Promise<Product[]> => {
  return await get(
    `${URL_PRODUCTS}?${`type=${type}`}${priceOrder ? '&' : ''}${
      priceOrder ? `sortBy=price&order=${priceOrder}` : ''
    }`
  );
};

const searchProducts = async (productName: string): Promise<Product[]> => {
  return await get(`${URL_PRODUCTS}?search=${productName}`);
};

export {
  getAllProduct,
  addNewProduct,
  updateProduct,
  removeProduct,
  filterProductsByTypeAndPrice,
  searchProducts
};
