import React from 'react';

// Styles
import "./index.css";
import { TextField } from '@components/commons/TextField';
import { searchIcon } from '@assets/index';
import { Posts } from '@components/Posts/index';

const Main = () => (
  <main className='main'>
    <div className='search-container container'>
      {/* SEARCHING AREA */}
      <TextField
        placeholder='Searching...'
        iconUrl={searchIcon}
        height='4.25rem'
        iconWidth='2rem'
      />
    </div>
    <div className='filter-container'>
      {/* // TODO: Filter container... */}
    </div>

    <div className='posts-container'>
      <Posts />
    </div>
  </main >
);

export default Main;
