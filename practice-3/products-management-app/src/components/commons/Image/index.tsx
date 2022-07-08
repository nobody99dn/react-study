// Library
import React, { memo, useState } from 'react';

// Styles
import './index.css';

// Constants
import { ERROR_MESSAGES, ImageVariants } from '@constants/index';
import Text from '@components/commons/Text';

interface ImageProps {
  alt: string;
  className?: string;
  height?: string;
  imageUrl: string;
  width?: string;
  variant?: ImageVariants;
  isError?: boolean;
  onImageClick?: () => void;
  onImageError?: () => void;
}

const Image: React.FC<ImageProps> = ({
  alt,
  className,
  height,
  imageUrl,
  width,
  variant = ImageVariants.Default,
  isError = false,
  onImageClick,
  onImageError
}) => {
  return !isError ? (
    <img
      className={`image ${
        variant !== ImageVariants.Default ? `image-${variant} ` : ''
      } ${className}`}
      alt={alt}
      src={imageUrl}
      style={{ width: width, height: height }}
      onClick={onImageClick}
      onError={onImageError}
    />
  ) : (
    <div className='image-error'>
      <Text color='red'>{ERROR_MESSAGES.IMAGE_NOT_FOUND}</Text>
    </div>
  );
};

export default memo(Image);
