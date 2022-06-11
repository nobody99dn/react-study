// Constant
import { URL_PRODUCTS } from '@constants/api';

// Helper
import { get, post } from '@helpers/clientRequests';

// Type
import { Product } from 'type/product';

async function getAllProduct(): Promise<Product[]> {
  return await get(URL_PRODUCTS);
}

async function addNewProduct(product: Product): Promise<Product> {
  return await post(URL_PRODUCTS, product);
}

export { getAllProduct, addNewProduct };
