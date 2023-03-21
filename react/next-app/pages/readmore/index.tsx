import { useRouter } from 'next/router';

export default function ReadMore({ post }: any) {
  const router = useRouter();

  return (
    <button
      type='button'
      onClick={() => {
        router.push({
          pathname: '/post/[pid]',
          query: { pid: post.id }
        });
      }}
    >
      Click here to read more
    </button>
  );
}
