import { FC, memo } from 'react';
import Image from 'next/future/image';
import TextField from '@components/TextField';
import { TextFieldTypes } from '@common-types/textfield';

const SearchBox: FC = () => {
  return (
    <div className="relative">
      <TextField
        name="search-box"
        type={TextFieldTypes.text}
        className="border-dark-gray border-2 w-full"
      />
      <Image
        src="/icons/search.svg"
        alt="Search Icon"
        width="20"
        height={10}
        className="absolute right-2 top-4 text-dark"
      />
    </div>
  );
};

export default memo(SearchBox);
