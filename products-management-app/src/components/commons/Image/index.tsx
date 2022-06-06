// Library
import React from 'react';

// Styles
import './index.css';

export enum ImageTypes {
  Default = 'default',
  Logo = 'logo',
  Icon = 'icon'
}

// Constants
import { ImageVariants } from '@/constants/types';

interface ImageProps {
  alt: string;
  className?: string;
  height?: string;
  imageUrl: string;
  width?: string;
  variants?: ImageVariants;
  [props: string]: any;
}

export const Image: React.FC<ImageProps> = (
  {
    alt,
    className,
    height,
    imageUrl,
    width,
    variant = ImageVariants.Default,
  }
) => (
  <img
    className={
      ['image',
        variant !== ImageVariants.Default
          ? `image-${variant} `
          : '',
        className
      ].join(' ').trim()
    }
    alt={alt}
    src={imageUrl}
    style={{ width: width, height: height }}
  />
);
