// Library
import axios from 'axios';

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

export { get, post, remove };
