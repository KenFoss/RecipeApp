import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home.js';
import Recipes from './pages/Recipes.js'
import RecipeInfo from './pages/RecipeInfo.js';

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/recipes' element={<Recipes/>}/>
      <Route path = '/recipe-info/:id' element={<RecipeInfo/>}/>
    </Routes>
  );
}

export default App;
