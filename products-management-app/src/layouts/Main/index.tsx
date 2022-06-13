// Library
import React from 'react';

// Styles
import "./index.css";
import { searchIcon } from '@assets/index';

// Components
import { TextField } from '@components/commons/TextField';
import { Posts } from '@components/Posts/index';
import { SideBar } from '../../components/SideBar/index';
import { Search } from '@components/Search';

// Style
import './index.css';

const Main = () => (
  <main className='main'>
    <div className='search-container container'>
      {/* SEARCHING AREA */}
      <Search />
    </div>
    <SideBar />

    <div className='posts-container'>
      <Posts />
    </div>
  </main >
);

export default Main;
