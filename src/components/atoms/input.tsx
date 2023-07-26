import React, { ChangeEventHandler, ReactElement } from 'react';

interface InputProps {
  type: 'text' | 'password' | 'email'; // You can add more types if needed
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
}: InputProps): ReactElement => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='px-4 py-2 border rounded-md border-none focus:outline-none'
    />
  );
};

export default Input;
