// Constant
import { URL_PRODUCTS } from '@constants/api';

// Helper
import { get, post, remove, update } from '@helpers/clientRequests';

// Type
import { Product } from '@models/product';

const getAllProduct = async (): Promise<Product[]> => {
  return await get(URL_PRODUCTS);
};

const addNewProduct = async (product: Product): Promise<Product> => {
  return await post(URL_PRODUCTS, product);
};

const removeProduct = async (id: string): Promise<Product> => {
  return await remove(`${URL_PRODUCTS}/${id}`);
};

const updateProduct = async (product: Product): Promise<Product> => {
  return await update(`${URL_PRODUCTS}/${product.id}`, product);
};

export { getAllProduct, addNewProduct, updateProduct, removeProduct };
