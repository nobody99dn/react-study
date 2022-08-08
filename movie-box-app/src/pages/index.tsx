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
import Card from '@components/Card';
import { Genres } from '@common-types/movieGenreTypes';
import Tabs from '@components/Tabs';

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
      <Card
        movie={{
          id: '1',
          name: 'test',
          genres: [Genres.Action, Genres.Drama],
          image:
            'https://lh5.googleusercontent.com/m0DncCclLuK-9ybM3pd_mNsN00GwDQ6JJtWxbe3mohlP-E3dP01ZQPnK38wybL3Rp5M=w2400',
          rating: 5,
          releaseYear: 1999
        }}
        onClick={() => null}
      />
      <Tabs options={['Trending', 'Top rate']}>Movie</Tabs>
      HOME PAGE
    </>
  );
};

export default Home;
