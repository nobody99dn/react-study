// Constant
import { LOCAL_KEY } from '@constants/types';

// Model
import { Product } from '@models/product';

/**
 * Get data from local storage
 *
 * @returns T | null
 */
const getLocalProducts = <T>(): T => {
  const item = window.localStorage.getItem(LOCAL_KEY);

  return item ? JSON.parse(item) : null;
};

/**
 * Save data to local storage
 *
 * @param data {productList: Product[]}
 * @returns void
 */
const setLocalProducts = (data: Product[]): void => {
  // clear before override
  window.localStorage.removeItem(LOCAL_KEY);

  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
};

export { getLocalProducts, setLocalProducts };
