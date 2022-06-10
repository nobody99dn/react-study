// Library
import React, { useCallback } from 'react';

// Components
import { Image } from '@components/commons/Image/index';

// Styles
import './index.css';
import { ImageVariants, TextFieldVariants } from '@constants/types';

interface TextFieldProps {
  id?: string;
  name?: string;
  defaultValue?: string | number,
  disabled?: boolean,
  height?: string;
  width?: string;
  readonly?: boolean;
  required?: boolean,
  type?: 'text' | 'number' | 'email' | 'tel';
  placeholder: string;
  iconUrl?: string;
  iconHeight?: string;
  iconWidth?: string;
  variant?: TextFieldVariants,
  label?: string;
  onChange?: (value: string | number) => void;
}

export const TextField: React.FC<TextFieldProps> = (
  {
    id,
    name,
    defaultValue,
    disabled = false,
    height,
    label,
    width,
    type,
    readonly = false,
    required = false,
    placeholder,
    iconUrl,
    iconHeight,
    iconWidth,
    variant = TextFieldVariants.Standard,
    onChange
  }
) => {
  const handleChange = useCallback(
    (e: { target: { value: string | number; }; }) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <div className='field-wrapper'>
      {label && <label htmlFor={id}>{label}: </label>}
      <div className={'input-wrapper'}>
        {
          iconUrl && <Image
            alt={'icon'}
            className={'icon-left'}
            imageUrl={iconUrl}
            variant={ImageVariants.Icon}
            width={iconWidth}
            height={iconHeight}
          />
        }
        <input
          id={id}
          name={name}
          className={['field', `field-${variant}`].join(' ').trim()}
          type={type}
          style={{ width: width, height: height }}
          placeholder={placeholder}
          value={defaultValue}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          onChange={handleChange}
        />
      </div >
    </div >
  );
};
