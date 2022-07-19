// Constant
import { URL_PRODUCTS } from '@constants/api';
import {
  FilterOrderOptions,
  ProductTypes,
  ERROR_MESSAGES
} from '@constants/index';

// Helper
import { get, post, remove, update } from '@helpers/clientRequests';
import { filterTypeAndPriceOrder, queryProducts } from '@helpers/queries';

// Model
import { Product } from '@models/product';

/**
 * Get all product from database and save in local
 *
 * @returns Product[]
 */
const getAllProduct = async (): Promise<Product[]> => {
  return (await get(URL_PRODUCTS)) as Product[];
};

const getProduct = async (id: string): Promise<Product> => {
  try {
    return (await get(`${URL_PRODUCTS}/${id}`)) as Product;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.PRODUCT_NOT_FOUND);
  }
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
  return (await get(filterTypeAndPriceOrder(type, priceOrder))) as Product[];
};

const searchProducts = async (input: string): Promise<Product[]> => {
  return (await get(queryProducts(input))) as Product[];
};

export {
  getAllProduct,
  getProduct,
  addNewProduct,
  updateProduct,
  removeProduct,
  filterProductsByTypeAndPrice,
  searchProducts
};
