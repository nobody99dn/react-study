// Library
import React, { useCallback } from 'react';

// Style
import './index.css';

interface SelectProps {
  id?: string,
  name: string,
  value?: string | number;
  label: string;
  options: string[];
  onChange: (value: any) => void;
}

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  value,
  label,
  options,
  onChange
}) => {
  const handleChange = useCallback(
    (e: { target: { value: string; }; }) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <div className='select-wrapper'>
      <label htmlFor={id}>{label}:</label>
      <select className='select'
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      >
        <option value="">Select</option>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
