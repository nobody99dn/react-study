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
import MovieList from '@components/MovieList';
import { Movie } from '@models/Movie';
import { getMovies } from '@services/movie.service';
import { ERROR_MESSAGES } from '@constants/messages';

interface HomeProps {
  movieList: Movie[];
}

const Home: NextPage<HomeProps> = ({ movieList = [] }) => {
  const router = useRouter();

  console.log(movieList);

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
      <MovieList movies={movieList} />
      HOME PAGE
    </>
  );
};

export async function getStaticProps() {
  try {
    const response: Movie[] = await getMovies();

    if (!response) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }

    return {
      props: { movieList: response }
    };
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errorMessage: error.message } };
    }

    return { props: {} };
  }
}

export default Home;
