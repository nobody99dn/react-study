// Constant
import { URL_PRODUCTS } from '@constants/api';

// Helper
import { get, post, remove } from '@helpers/clientRequests';

// Type
import { Product } from 'type/product';

async function getAllProduct(): Promise<Product[]> {
  return await get(URL_PRODUCTS);
}

async function addNewProduct(product: Product): Promise<Product> {
  return await post(URL_PRODUCTS, product);
}

async function removeProduct(id: string): Promise<Product> {
  return await remove(`${URL_PRODUCTS}/${id}`);
}

export { removeProduct, getAllProduct, addNewProduct };
