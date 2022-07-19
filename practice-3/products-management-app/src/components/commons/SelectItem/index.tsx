// Library
import { FilterOrderOptions, ProductTypes } from '@constants/index';
import React, { memo, useCallback } from 'react';

// Style
import './index.css';

interface SelectItemProps {
  id?: string;
  name: string;
  value?: string | number;
  label: string;
  options: string[];
  disable?: boolean;
  handleSelectChange: (value: string, fieldName: string) => void;
}

const SelectItem: React.FC<SelectItemProps> = ({
  id,
  name,
  value,
  label,
  options,
  disable = false,
  handleSelectChange
}) => {
  const handleChange = useCallback(
    (e: { target: { value: string; name: string } }) => {
      handleSelectChange?.(e.target.value, e.target.name);
    },
    [handleSelectChange]
  );

  return (
    <div className='select-wrapper'>
      <label htmlFor={id}>{label}:</label>
      <select
        className='select'
        name={name}
        id={id}
        value={value}
        disabled={disable}
        onChange={handleChange}
        data-testid='select-option'
      >
        <option value=''>Select</option>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(SelectItem);
