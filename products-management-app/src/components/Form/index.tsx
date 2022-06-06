import React from 'react';

// Styles
import './index.css';

// Constants
import { FormVariants } from '@/constants/types';

// Components
import { Title } from '@components/commons/Title';
import { TextField } from '@components/commons/TextField';
import { Button } from '@components/commons/Button';

interface FormProps {
  variants: FormVariants;
  handleSubmit(): void;
}

export const Form: React.FC<FormProps> = ({
  variants,
  handleSubmit
}) => {

  return (
    <div className='form-wrapper'>
      <Title>{variants} Form</Title>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='field-group'>
          <TextField label='Product name:' placeholder='Enter product name...' />
          <label htmlFor="">Product Type:</label>
          <br />
          <select className='form-select' name="" id="">
            <option value="">Select type:</option>
            <option value="Phone">Phone</option>
            <option value="Tablet">Tablet</option>
            <option value="Laptop">Laptop</option>
          </select>
          <TextField type='number' label='Price:' placeholder='Enter price...' />
        </fieldset>
        <Button>{variants}</Button>
      </form>
    </div>
  );
};
