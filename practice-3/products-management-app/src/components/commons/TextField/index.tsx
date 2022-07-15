// Library
import React, { memo, useCallback } from 'react';

// Components
import Image from '@components/commons/Image/index';

// Styles
import './index.css';

// Constants
import {
  ImageVariants,
  TextFieldVariants,
  TypeVariables
} from '@constants/index';

export interface TextFieldProps {
  id?: string;
  name?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  height?: string;
  width?: string;
  readonly?: boolean;
  required?: boolean;
  type?: TypeVariables;
  placeholder: string;
  iconUrl?: string;
  iconHeight?: string;
  iconWidth?: string;
  variant?: TextFieldVariants;
  label?: string;
  onChange?: (value: string | number, fieldName: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  defaultValue = '',
  disabled = false,
  height,
  label,
  width,
  type = TypeVariables.Text,
  readonly = false,
  required = false,
  placeholder,
  iconUrl,
  variant = TextFieldVariants.Standard,
  onChange
}) => {
  const handleChange = useCallback(
    (e: { target: { value: string | number; name: string } }) => {
      onChange?.(e.target.value, e.target.name);
    },
    [onChange]
  );

  return (
    <div className='field-wrapper'>
      {label && <label htmlFor={id}>{label}: </label>}
      <div className={'input-wrapper'}>
        {iconUrl && (
          <Image
            alt={'icon'}
            className={'icon-left'}
            imageUrl={iconUrl}
            variant={ImageVariants.Icon}
          />
        )}
        <input
          id={id}
          name={name}
          className={`field field-${variant}`}
          type={type}
          style={{ width: width, height: height }}
          placeholder={placeholder}
          value={defaultValue}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default memo(TextField);
