// Library
import React from 'react';

// Styles
import './index.css';

export enum ImageTypes {
  Default = 'default',
  Logo = 'logo',
  Icon = 'icon'
}

interface ImageProps {
  alt: string;
  className?: string;
  height?: string;
  imageUrl: string;
  width?: string;
  variants?: ImageTypes;
  [props: string]: any;
}

export const Image: React.FC<ImageProps> = (
  {
    alt,
    className,
    height,
    imageUrl,
    width,
    variant = ImageTypes.Default,
  }
) => (
  <img
    className={
      ['image',
        variant !== ImageTypes.Default
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
