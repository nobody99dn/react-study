import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Page(props: any) {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [router.query.slug]);

  return (
    <div>
      <h1>Page: {router.query.slug}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <Link href='/one'>
        <a>one</a>
      </Link>{' '}
      <Link href='/two'>
        <a>two</a>
      </Link>
    </div>
  );
}
