// Library
import React, { memo, useState, useCallback } from 'react';

// Styles
import './index.css';

// Constants
import { ERROR_MESSAGES, ImageVariants } from '@constants/index';

// Component
import Text from '@components/commons/Text';

interface ImageProps {
  alt: string;
  className?: string;
  imageUrl: string;
  variant?: ImageVariants;
  isError?: boolean;
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
    <>
      <img
        className={`image ${
          variant !== ImageVariants.Default ? `image-${variant} ` : ''
        } ${className}`.trim()}
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
    </>
  );
};

export default memo(Image);
