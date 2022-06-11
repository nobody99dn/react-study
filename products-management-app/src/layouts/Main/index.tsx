// Library
import React from 'react';

// Styles
import "./index.css";
import { searchIcon } from '@assets/index';

// Components
import { TextField } from '@components/commons/TextField';
import { Posts } from '@components/Posts/index';
import { SideBar } from '../../components/SideBar/index';

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
    <SideBar />

    <div className='posts-container'>
      <Posts />
    </div>
  </main >
);

export default Main;
