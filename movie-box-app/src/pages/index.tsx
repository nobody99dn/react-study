import { getCurrentUser } from '@helpers/localStore';
import { Account } from '@models/Account';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const currentUser: Account | null = getCurrentUser();

    if (!currentUser) {
      router.push('/login');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Movies Box</title>
      </Head>
      {/* TODO: Implement home page here */}
      HOME PAGE
    </>
  );
};

export default Home;
