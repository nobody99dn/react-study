// Libraries
import { FC } from 'react';

// Types
import { TitleVariants } from '@common-types/title';

interface TitleProps {
  className?: string;
  content: string;
  variant?: TitleVariants;
}

const Title: FC<TitleProps> = ({
  className,
  content,
  variant = TitleVariants.default
}) => (
  <div
    className={`' ' + ${
      variant === TitleVariants.subtitle
        ? 'text-sm text-gray-200'
        : 'text-base text-gray-300'
    }${className && ` ${className}`}`}
  >
    {content}
  </div>
);

export default Title;
