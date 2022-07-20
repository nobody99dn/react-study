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
  // TODO: remove class
  className?: string;
  imageUrl: string;
  variant?: ImageVariants;
  handleClick?: () => void;
}

const Image: React.FC<ImageProps> = ({
  alt,
  className = '',
  imageUrl = blankImage,
  variant = ImageVariants.Default,
  handleClick
}) => (
  //TODO: Remove div
  <div className={className}>
    <img
      className={`image${
        variant !== ImageVariants.Default ? ` image-${variant} ` : ''
      }`}
      alt={alt}
      src={imageUrl}
      onClick={handleClick}
    />
  </div>
);

export default memo(Image);
