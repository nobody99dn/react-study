/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Helpers
import { getCurrentUser } from '@helpers/localStore';

// Models
import { Account } from '@models/Account';

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
