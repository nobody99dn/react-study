// Model
import { Product } from '@models/product';

/**
 * Get data from local storage
 *
 * @returns T | null
 */
const getLocalProducts = <T>(key: string): T => {
  const item = window.localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

/**
 * Save data to local storage
 *
 * @param data {productList: Product[]}
 * @returns void
 */
const setLocalProducts = (key: string, data: Product[]): void => {
  // clear before override
  window.localStorage.removeItem(key);

  window.localStorage.setItem(key, JSON.stringify(data));
};

export { getLocalProducts, setLocalProducts };
