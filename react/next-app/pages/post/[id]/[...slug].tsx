import { useRouter } from 'next/router';

// Catch all routes
const Slug = () => {
  const router = useRouter();
  const { id, slug } = router.query;

  return (
    <>
      <h1>Post: {id}</h1>
      <h2>Slug: {slug}</h2>
    </>
  );
};

export default Slug;
