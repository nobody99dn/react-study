// Libraries
import React, { memo, useState, useCallback } from 'react';

// Styles
import './index.css';

// Constants
import { ERROR_MESSAGES, ImageVariants } from '@constants/index';

// Components
import { Text } from '@components/index';

export interface ImageProps {
  alt: string;
  className?: string;
  imageUrl: string;
  variant?: ImageVariants;
  handleClick?: () => void;
}

const Image: React.FC<ImageProps> = ({
  alt,
  className = '',
  imageUrl,
  variant = ImageVariants.Default,
  handleClick
}) => {
  const [isLoadImageFail, setIsLoadImageFail] = useState<boolean>();

  /**
   * Handle image load error
   */
  const handleImageError = () => {
    setIsLoadImageFail(true);
  };

  /**
   * Handle image loaded
   */
  const handleImageLoaded = useCallback(() => {
    setIsLoadImageFail(false);
  }, []);

  return (
    <div className={className}>
      <img
        className={`image ${
          variant !== ImageVariants.Default ? `image-${variant} ` : ''
        }`.trim()}
        alt={alt}
        src={imageUrl}
        onClick={handleClick}
        onError={handleImageError}
        onLoad={handleImageLoaded}
      />
      {isLoadImageFail && (
        <div className='image-error'>
          <Text color='var(--danger)'>{ERROR_MESSAGES.IMAGE_NOT_FOUND}</Text>
        </div>
      )}
    </div>
  );
};

export default memo(Image);
