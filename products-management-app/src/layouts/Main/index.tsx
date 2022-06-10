import React from 'react';

// Styles
import "./index.css";
import { TextField } from '@components/commons/TextField';
import { searchIcon } from '@assets/index';
import { Posts } from '@components/Posts/index';

const Main = () => (
  <main className={'main container'}>
    <section className={'search-container'}>
      {/* SEARCHING AREA */}
      <TextField
        placeholder={'Searching...'}
        iconUrl={searchIcon}
        height='4.25rem'
        iconWidth='2rem'
      />
    </section>
    <section className={'filter-container'}>
      {/* // TODO: Filter container... */}
    </section>

    <section className='posts-container'>
      <Posts />
    </section>
  </main>
);

export default Main;
