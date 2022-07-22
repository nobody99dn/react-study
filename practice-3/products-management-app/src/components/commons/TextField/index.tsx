// Libraries
import React, {
  memo,
  forwardRef,
  useState,
  ChangeEvent,
  useCallback
} from 'react';

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
  onInputChange?: (value: string | number, fieldName?: string) => void;
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
      onInputChange
    },
    ref = null
  ) => {
    const [value, setValue] = useState<string | number>(defaultValue);

    const handleChange = useCallback((event: ChangeEvent) => {
      const newValue = (event.currentTarget as HTMLInputElement).value;
      setValue(newValue);

      onInputChange && onInputChange(newValue);
    }, []);

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
            style={{ width, height }}
            placeholder={placeholder}
            value={value}
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

TextField.displayName = 'TextField';

export default memo(TextField);
