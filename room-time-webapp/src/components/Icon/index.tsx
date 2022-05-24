import './index.css';

interface IconProps {
  iconUrl: string;
  variant: 'social' | 'product';
  hint: string;
  [props: string]: any;
}

export const Icon: React.FC<IconProps> = ({
  iconUrl,
  variant,
  hint = 'Image',
  ...props
}) => (
  <img
    className={`${variant === 'social' ? `icon-${variant}` : ''}`}
    src={iconUrl}
    alt={hint}
    {...props}
  />
);
