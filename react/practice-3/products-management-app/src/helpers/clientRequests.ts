// Library
import axios, { AxiosResponse } from 'axios';

// Model
import { Product } from '@models/product';
import { ERROR_MESSAGES } from '@constants/messages';

/**
 * Get data from server
 *
 * @param url string
 * @returns Product[] | Product
 */
const get = async <T>(url: string): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.get(url);

    return res.data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  }
};

/**
 * Add new data to server
 *
 * @param url string
 * @param data Product
 * @returns Product
 */
const post = async (url: string, data: Product): Promise<Product> => {
  const res: AxiosResponse<Product> = await axios.post(url, data);

  return res.data;
};

/**
 * Remove Product in server
 *
 * @param url string
 * @returns Product
 */
const remove = async (url: string): Promise<Product> => {
  try {
    const res: AxiosResponse<Product> = await axios.delete(url);

    return res.data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  }
};

/**
 * Update data to server
 *
 * @param url string
 * @param data Product
 * @returns Product
 */
const update = async (url: string, data: Product): Promise<Product> => {
  try {
    const res: AxiosResponse<Product> = await axios.put(url, data);

    return res.data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
  }
};

export { get, post, update, remove };
