// Libraries
import { memo, useCallback, forwardRef } from 'react';

// Components
import { Image } from '@components/index';

// Styles
import './index.css';

// Types
import {
  ImageVariants,
  TextFieldVariants,
  TypeVariables
} from '@common-types/index';

export interface TextFieldProps {
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
  handleInputChange?: (value: string | number, fieldName: string) => void;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
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
      handleInputChange
    },
    ref = null
  ) => {
    const handleChange = useCallback(
      (e: { target: { value: string | number; name: string } }) => {
        handleInputChange?.(e.target.value, e.target.name);
      },
      [handleInputChange]
    );

    return (
      <div className='field-wrapper'>
        {label && <label htmlFor={name}>{label}: </label>}
        <div className={'input-wrapper'}>
          {iconUrl && (
            <div className={'icon-left'}>
              <Image
                alt={'icon'}
                imageUrl={iconUrl}
                variant={ImageVariants.Icon}
              />
            </div>
          )}
          <input
            id={name}
            name={name}
            className={`field field-${variant}`}
            type={type}
            style={{ width: width, height: height }}
            placeholder={placeholder}
            value={defaultValue}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            ref={ref}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
);

export default memo(TextField);
