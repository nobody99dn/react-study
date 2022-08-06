// Constants
import { ACCOUNT_URL } from '@constants/api';

// Helpers
import { get } from '@helpers/index';
import { Account } from '@models/Account';

const getAccount = async (username: string): Promise<Account[]> => {
  return await get(`${ACCOUNT_URL}?username=${username}`);
};

export { getAccount };
