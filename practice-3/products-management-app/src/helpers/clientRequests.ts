// Library
import axios, { AxiosError, AxiosResponse } from 'axios';

// Model
import { Product } from '@models/product';

/**
 * Get data from server
 *
 * @param url string
 * @returns Product[] | Product
 */
const get = async <T>(url: string): Promise<T> => {
  const res: AxiosResponse<T> = await axios.get(url);

  return res.data;
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
  const res: AxiosResponse<Product> = await axios.delete(url);

  return res.data;
};

/**
 * Update data to server
 *
 * @param url string
 * @param data Product
 * @returns Product
 */
const update = async (url: string, data: Product): Promise<Product> => {
  const res: AxiosResponse<Product> = await axios.put(url, data);

  return res.data;
};

export { get, post, update, remove };
