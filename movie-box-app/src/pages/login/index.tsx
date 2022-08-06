// Libraries
import { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// Components
import Form from '@components/Form';
import Text from '@components/Text';

// Contants
import { ERROR_MESSAGES } from '@constants/messages';

// Models
import { Account } from '@models/Account';

// Services
import { getAccount } from '@services/account';

const Login: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = useCallback(async (account: Account) => {
    const response: Account[] = await getAccount(account.username);

    if (response && response[0].password.match(account.password)) {
      router.push('/');

      return;
    }

    setErrorMessage(ERROR_MESSAGES.NO_ACCOUNT_FOUND);
  }, []);

  return (
    <main className="h-screen bg-login bg-center bg-cover bg-no-repeat">
      <div className="h-full flex flex-col items-center justify-center">
        <Text
          content={errorMessage}
          className=" text-sm text-highlight text-start h-4 pt-1"
        />
        <Form className=" w-1/3" onSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default Login;
