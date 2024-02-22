import {useState, useEffect, useRef} from 'react';
import NavBar from '../components/Nav.js';

function Home() {
  return(
    <div className='HomePage'>
      <NavBar />
      <h1>Welcome to RecipeBrowser</h1>
      <a href='/recipes'>Browse Away!</a>
    </div>
  );
}

export default Home;