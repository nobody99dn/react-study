// Library
import axios from 'axios';

export const get = async (url: string): Promise<any> => {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};
