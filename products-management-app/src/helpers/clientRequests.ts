// Library
import axios from 'axios';

/**
 * Get data from server
 *
 * @param url string
 * @returns any
 */
const get = async (url: string): Promise<any> => {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};

/**
 * Add new data to server
 *
 * @param url string
 * @param data any
 * @returns add data to server
 */
const post = async (url: string, data: any): Promise<any> => {
  try {
    const res = await axios.post(url, data);
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};

const remove = async (url: string): Promise<any> => {
  try {
    const res = await axios.delete(url);

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};

/**
 * Update data to server
 *
 * @param url string
 * @param data any
 * @returns any
 */
const update = async (url: string, data: any): Promise<any> => {
  try {
    const res = await axios.put(url, data);

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};

export { get, post, update, remove };
