// Library
import React, { memo } from 'react';

// Styles
import './index.css';

// Constants
import { ImageVariants } from '@constants/index';

interface ImageProps {
  alt: string;
  className?: string;
  height?: string;
  imageUrl: string;
  width?: string;
  variant?: ImageVariants;
  onImageClick?: () => void;
}

const Image: React.FC<ImageProps> = ({
  alt,
  className,
  height,
  imageUrl,
  width,
  variant = ImageVariants.Default,
  onImageClick
}) => (
  <img
    className={`image ${
      variant !== ImageVariants.Default ? `image-${variant} ` : ''
    } ${className}`}
    alt={alt}
    src={imageUrl}
    style={{ width: width, height: height }}
    onClick={onImageClick}
  />
);

export default memo(Image);
