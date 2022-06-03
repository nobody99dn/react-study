import React, { ReactNode } from "react";

// Components
import { Image } from "@/components/commons/Image/index";

// Styles
import './index.css';
import { ImageTypes } from '../Image/index';

export enum VariantsTypes {
  Standard = 'standard',
  Outline = 'outline',
  Error = 'error'
}

interface TextFieldProps {
  defaultValue?: string,
  disabled?: boolean,
  height?: string;
  width?: string;
  readonly?: boolean;
  required?: boolean,
  type?: 'text' | 'number' | 'email' | 'tel';
  placeholder: string;
  iconUrl: string;
  variant?: VariantsTypes,
  label?: string;
}

export const TextField: React.FC<TextFieldProps> = (
  {
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
    variant = VariantsTypes.Standard
  }
) => {
  const handleChange = () => { };

  return (
    <div>
      {label && <label htmlFor={`input-${variant}`}>{label}</label>}
      <div className={'input-wrapper'}>
        <Image imageUrl={iconUrl} variants={ImageTypes.Icon} />
        <input
          id={`input-${variant}`}
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
      </div>
    </div>
  );
};
