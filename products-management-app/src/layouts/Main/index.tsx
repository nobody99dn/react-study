import React from 'react';

// Style
import './index.css';

// Components
import { Posts } from '@components/Posts/index';
import { Search } from '@components/Search';

const Main = () => (
  <main className='main'>
    <div className='search-container container'>
      {/* SEARCHING AREA */}
      <Search />
    </div>
    <div className='sidebar'>
      {/* // TODO: Filter container... */}
    </div>

    <div className='posts-container'>
      <Posts />
    </div>
  </main >
);

export default Main;
