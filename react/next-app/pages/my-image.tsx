import Image from 'next/image';

type Loader = { src: string; width: number; quality: number };

const myLoader = ({ src, width, quality }: Loader) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props: any) => {
  return (
    <Image
      loader={myLoader}
      src='me.png'
      alt='Picture of the author'
      width={500}
      height={500}
    />
  );
};

export default MyImage;
