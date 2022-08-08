/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// Helpers
import { getCurrentUser } from '@helpers/localStore';

// Models
import { Account } from '@models/Account';

// Components
import SEO from '@components/SEO';

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
      <SEO
        description="The greatest movies you must known!"
        siteTitle="Home page"
        title="Home"
      />
      {/* TODO: Implement home page here */}
      HOME PAGE
    </>
  );
};

export default Home;
