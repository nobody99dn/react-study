export enum ImageTypes {
  Default = 'default',
  Logo = 'logo',
  Icon = 'icon'
}

interface ImageProps {
  alt?: string,
  height?: string,
  imageUrl: string,
  width?: string,
  variants?: ImageTypes,
  [props: string]: any;
}

export const Image: React.FC<ImageProps> = (
  {
    alt = 'Image',
    height,
    imageUrl,
    width,
    variant = ImageTypes.Default,
    ...props
  }
) => (
  <img
    className={
      ['image',
        variant !== ImageTypes.Default
          ? `image-${variant} `
          : ''
      ].join(' ').trim()
    }
    alt={alt}
    src={imageUrl}
    style={{ width: width, height: height }}
    {...props}
  />
);
