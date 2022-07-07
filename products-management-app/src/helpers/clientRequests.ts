// Library
import axios, { AxiosResponse } from 'axios';

import { Product } from '@models/product';

/**
 * Get data from server
 *
 * @param url string
 * @returns Product[]
 */
const get = async (url: string): Promise<Product[]> => {
  const res: AxiosResponse<Product[]> = await axios.get(url);

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

const remove = async (url: string): Promise<Product> => {
  const res: AxiosResponse<Product> = await axios.delete(url);

  return res.data;
};

/**
 * Update data to server
 *
 * @param url string
 * @param data any
 * @returns any
 */
const update = async (url: string, data: Product): Promise<Product> => {
  const res: AxiosResponse<Product> = await axios.put(url, data);

  return res.data;
};

export { get, post, update, remove };
