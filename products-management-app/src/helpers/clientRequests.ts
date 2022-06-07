// Libraries
import axios from 'axios'

export const get = async (url: string) => {
  try {
    const response = await axios.get(url)
  
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

  }
}
