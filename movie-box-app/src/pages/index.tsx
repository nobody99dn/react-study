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
import Banner from '@components/Banner';
import RatingBox from '@components/RatingBox';
import SearchBox from '@components/SearchBox';

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
      <Banner />
      <RatingBox value={4.5} />
      <SearchBox />
      HOME PAGE
    </>
  );
};

export default Home;
