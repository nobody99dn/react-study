// Constant
import { URL_PRODUCTS } from '@constants/api';

// Helper
import { get, post, remove, update } from '@helpers/clientRequests';

// Type
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

export { getAllProduct, addNewProduct, updateProduct, removeProduct };
