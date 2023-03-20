// Libraries
import React, {
  ChangeEvent,
  forwardRef,
  memo,
  useState,
  useCallback,
  useEffect
} from 'react';

// Styles
import './index.css';

interface SelectItemProps {
  name: string;
  defaultValue: string;
  label: string;
  options: string[];
  disable?: boolean;
  onSelectChange?: (value: string, fieldName?: string) => void;
}

const SelectItem = forwardRef<HTMLSelectElement, SelectItemProps>(
  (
    { name, defaultValue, label, options, disable = false, onSelectChange },
    ref = null
  ) => {
    const [value, setValue] = useState<string>(defaultValue);
    const [isFirstRun, setIsFirstRun] = useState(true);

    const handleChange = useCallback((event: ChangeEvent) => {
      const newValue = (event.currentTarget as HTMLInputElement).value;
      setValue(newValue);

      onSelectChange && onSelectChange(newValue);
    }, []);

    useEffect(() => {
      if (isFirstRun) {
        setIsFirstRun(false);
        return;
      }

      setValue(defaultValue);
    }, [defaultValue]);

    return (
      <div className='select-wrapper'>
        <label htmlFor={name}>{label}:</label>
        <select
          className='select'
          name={name}
          id={name}
          value={value}
          disabled={disable}
          onChange={handleChange}
          data-testid='select-option'
          ref={ref}
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
  }
);

SelectItem.displayName = 'SelectItem';

export default memo(SelectItem);
