// Library
import React from 'react';

<<<<<<< HEAD
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
=======
// Style
import './index.css';

// Components
import { Posts } from '@components/Posts/index';
import { Search } from '@components/Search';
>>>>>>> 4280522 (Implement Search product item feature)

const Main = () => (
  <main className='main'>
    <div className='search-container container'>
      {/* SEARCHING AREA */}
      <Search />
<<<<<<< HEAD
=======
    </div>
    <div className='sidebar'>
      {/* // TODO: Filter container... */}
>>>>>>> 4280522 (Implement Search product item feature)
    </div>
    <SideBar />

    <div className='posts-container'>
      <Posts />
    </div>
  </main >
);

export default Main;
