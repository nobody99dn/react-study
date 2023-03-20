import React from 'react';
import './index.css';

export enum IconVariants {
  Social = 'social',
  Product = 'product'
}

interface IconProps {
  iconUrl: string;
  variant: IconVariants;
  hint?: string;
  [props: string]: any;
}

export const Icon: React.FC<IconProps> = ({
  iconUrl,
  variant,
  hint = 'Image',
  ...props
}) => (
  <img
    className={`${variant === IconVariants.Social && `icon-${variant}`}`}
    src={iconUrl}
    alt={hint}
    {...props}
  />
);
