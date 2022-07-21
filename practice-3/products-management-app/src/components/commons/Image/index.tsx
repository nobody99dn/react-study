// Libraries
import React, { memo, useState, useCallback } from 'react';

// Styles
import './index.css';

// Types
import { ImageVariants } from '@common-types/index';

// Images
import { blankImage } from '@assets/index';

export interface ImageProps {
  alt: string;
  imageUrl: string;
  variant?: ImageVariants;
  handleClick?: () => void;
}

const Image: React.FC<ImageProps> = ({
  alt,
  imageUrl = blankImage,
  variant = ImageVariants.Default,
  handleClick
}) => (
  <img
    className={`image${
      variant !== ImageVariants.Default ? ` image-${variant} ` : ''
    }`}
    alt={alt}
    src={imageUrl}
    onClick={handleClick}
  />
);

export default memo(Image);
