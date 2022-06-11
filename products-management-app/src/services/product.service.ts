// Constant
import { URL_PRODUCTS } from '@constants/api';

// Helper
import { get, remove } from '@helpers/clientRequests';

// Type
import Product from '@models/product';

async function removeProduct(id: string): Promise<Product> {
  return await remove(`${URL_PRODUCTS}/${id}`);
}

export { removeProduct };
