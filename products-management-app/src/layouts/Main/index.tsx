// Library
import React, { memo } from 'react';

// Styles
import "./index.css";

// Components
import Posts from '@components/Posts/index';
import SideBar from '../../components/SideBar/index';
import Search from '@components/SearchInput';

// Style
import './index.css';

const Main = () => (
  <main className='main'>
    <div className='search-container container'>
      <Search />
    </div>
    <SideBar />

    <div className='posts-container'>
      <Posts />
    </div>
  </main >
);

export default memo(Main);
