import { ImageLoader } from 'next/image';

export const externalLoader: ImageLoader = ({ src, width }) => {
  return `${src}=w${width}`;
};

export const internalLoader: ImageLoader = ({ src }) => {
  return src;
};
