import { LOCAL_KEY } from '@constants/types';
import { Product } from '@models/product';

const getLocalData = (): Product[] => window.localStorage.getItem(LOCAL_KEY);

const setLocalData = (data: Product[]) =>
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(data));

export { getLocalData, setLocalData };
