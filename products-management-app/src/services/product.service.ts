// Constant
import { URL_PRODUCTS } from '@constants/api';

// Helper
import { get, post, update } from '@helpers/clientRequests';

// Type
import { Product } from 'type/product';

async function getAllProduct(): Promise<Product[]> {
  return await get(URL_PRODUCTS);
}

async function addNewProduct(product: Product): Promise<Product> {
  return await post(URL_PRODUCTS, product);
}

async function updateProduct(product: Product): Promise<Product> {
  return await update(`${URL_PRODUCTS}/${product.id}`, product);
}

export { getAllProduct, addNewProduct, updateProduct };
