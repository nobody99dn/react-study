// Libraries
import fetch from 'jest-fetch-mock';
import axios from 'axios';

// Requests
import { get, post, update, remove } from '..';

// Constant
import { ProductTypes } from '@constants/types';

// Product
import { Product } from '@models/product';
import { ERROR_MESSAGES } from '@constants/messages';

jest.mock('axios');

describe('Testing API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('fetches successfully data from an API', async () => {
    const mockData: Product[] = [
      {
        id: '1',
        imageUrl: '',
        name: 'Product test 1',
        price: 1000000,
        type: ProductTypes.Phone
      },
      {
        id: '2',
        imageUrl: '',
        name: 'Product test 2',
        price: 2000000,
        type: ProductTypes.Laptop
      },
      {
        id: '3',
        imageUrl: '',
        name: 'Product test 3',
        price: 3000000,
        type: ProductTypes.Tablet
      }
    ];
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );

    const res: Product[] = await get('url');

    expect(res).toEqual(mockData);
  });

  test('fetches erroneously data from an API', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error())
    );

    await expect(get('url')).rejects.toThrow(
      ERROR_MESSAGES.SERVER_RESPONSE_ERROR
    );
  });

  test('should create data', async () => {
    const mockData: Product = {
      id: '1',
      imageUrl: '',
      name: 'Product test 1',
      price: 1000000,
      type: ProductTypes.Phone
    };

    (axios.post as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );

    const res: Product = await post('url', mockData);

    expect(res).toEqual(mockData);
  });

  test('should update data', async () => {
    const updateData: Product = {
      id: '1',
      imageUrl: '',
      name: 'Product test 1',
      price: 2000000,
      type: ProductTypes.Phone
    };

    (axios.put as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: updateData })
    );

    const updatedData: Product = await update('url', updateData);
    expect(updatedData).toEqual(updateData);
  });

  test('should remove data', async () => {
    const mockData: Product = {
      id: '1',
      imageUrl: '',
      name: 'Product test 1',
      price: 1000000,
      type: ProductTypes.Phone
    };

    (axios.delete as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );

    const res: Product = await remove('url');

    expect(res).toEqual(mockData);
  });
});
