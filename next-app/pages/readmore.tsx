import { useRouter } from 'next/router';

const ReadMore = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/about')}>
      Click here to read more {process.env.customKey}
    </button>
  );
};

export default ReadMore;
