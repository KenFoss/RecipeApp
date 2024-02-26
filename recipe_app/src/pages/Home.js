import {useState, useEffect, useRef} from 'react';
import NavBar from '../components/Nav.js';

function Home() {
  return(
    <div className='HomePage'>
      <NavBar />
      <h1>Welcome to RecipeBrowser</h1>
      <h4>By Ken Foss</h4>
      <p> Please note that the api utilized here is not mine, it is the spoontacular api found here: <a href="https://spoonacular.com/api">Spoonacular API</a> </p>
      <p> I do maintain a rate limit on the calls to the api for cost purposes, should it be exceeded default data will be displayed to showcase some of the functionality</p>
      <p> Should the rate limit be exceeded, all recipes will default to the green smoothie.</p>
    </div>
  );
}

export default Home;