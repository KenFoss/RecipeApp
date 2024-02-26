import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home.js';
import Recipes from './pages/Recipes.js'
import RecipeInfo from './pages/RecipeInfo.js';
import MealPlanner from './pages/PlannedMeals.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/recipes' element={<Recipes/>}/>
        <Route path = '/recipe-info/:id' element={<RecipeInfo/>}/>
        <Route path = '/meal-planner' element = {<MealPlanner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
