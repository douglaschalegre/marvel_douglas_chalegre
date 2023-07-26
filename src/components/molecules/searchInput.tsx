import React, { ChangeEventHandler, ReactElement } from 'react';
import { FaSearch } from 'react-icons/fa';
import Icon from '../atoms/icons';
import Input from '../atoms/input';

interface SearchInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({ value, onChange }: SearchInputProps): ReactElement => {
  return (
    <div className='flex items-center bg-white rounded-lg p-2 shadow-md'>
      <Icon icon={FaSearch} size='1.5em' color='gray' />
      <Input
        type='text'
        placeholder='Busque pelo seu herói...'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
