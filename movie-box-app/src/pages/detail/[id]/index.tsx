import { useRouter } from 'next/router';
import Image from 'next/future/image';
import { getMovieById, getMovies } from '@services/movie.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Movie } from '@models/Movie';
import { ERROR_MESSAGES } from '@constants/messages';
import { ParamsProps } from '@common-types/param';

interface DetailProps {
  movie: Movie;
}

const Detail: NextPage<DetailProps> = ({ movie }) => {
  const { push } = useRouter();

  return (
    <div className="mt-20">
      <Image
        onClick={() => push('/')}
        src="/icons/arrow-left-short.svg"
        width="50"
        height="30"
        alt="back-icon"
      />
      {JSON.stringify(movie)}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response: Movie[] = await getMovies();

    if (!response) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }

    const paths = response.map(({ id }) => {
      return { params: { id } };
    });

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    if (error instanceof Error) {
      return { fallback: true, paths: [] };
    }

    return { fallback: true, paths: [] };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id = 0 } = params as ParamsProps;

    if (!id) {
      throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
    }
    const movie = await getMovieById(id);

    return {
      props: { movie }
    };
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errorMessage: error.message } };
    }

    return { props: {} };
  }
};

export default Detail;
