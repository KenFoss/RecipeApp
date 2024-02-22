import {useEffect, useState, useRef, createRef} from 'react';
import NavBar from '../components/Nav.js'
import { useNavigate } from 'react-router-dom';
// import { getSearchParamsForLocation } from 'react-router-dom/dist/dom.js';

const SearchParamsComponent = ({searchParams, setSearchParams}) => {
  return(
    // <div>
      Object.entries(searchParams).map( ([key, value]) => {
        return(
          <div key = {`${key}-div`} className='search-param-instance'>
            <label key={`${key}-label`}>{key == 'includeIngrediants' ? 'Include Ingrediants:' : 'Exclude Ingrediants:'}</label>
            <input key={`${key}-input`} ref={value} />
          </div>
        )
      })
  )
}

const SearchResultsComponent = ({searchResults}) => {
  let navigate = useNavigate();

  return (
    searchResults.map( (x) => {
      return(
        <div key={`recipe-${x['id']}`}>
          <h3>{x['title']}</h3>
          {/* <a href ={ `/recipe-info/${x['id']}`}>
            <img src={x['image']} alt={`Picture of ${x['title']} Recipe`} />
          </a> */}
          <img src={x['image']} onClick={() => navigate(`/recipe-info/${x['id']}`)} alt={`Picture of ${x['title']} Recipe`} />
        </div>
      )
    })
  )
}


function Recipes () {

  const [searchParams, setSearchParams] = useState({
    'includeIngrediants' : createRef(''),
    'excludeIngrediants' : createRef('')
  });

  const [searchResults, setSearchResults] = useState([]);


  const searchRecipes = async() => {
    let includeIngrediants = searchParams['includeIngrediants'].current.value.split(',');
    let excludeIngrediants = searchParams['excludeIngrediants'].current.value.split(',');

    // Eliminate white space
    includeIngrediants = includeIngrediants.map( (x) => {
      return x.trim();
    });

    excludeIngrediants = excludeIngrediants.map( (x) => {
      return x.trim();
    });

    // recombine without spaces
    includeIngrediants = includeIngrediants.reduce((acc, x) => {
      return (acc + x + ',');
    }, '')

    excludeIngrediants = excludeIngrediants.reduce((acc, x) => {
      return (acc + x + ',');
    }, '')

    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?includeIngredients=${includeIngrediants}&excludeIngrediants=${excludeIngrediants}&number=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '783f42985dmsh2295ac8603f8f85p138243jsna3dec0c5402a',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchResults(result['results'])
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='recipe-page'>
      <NavBar />
      <h1> Browse Our Recipes! </h1>

      <div className='search-controls'>
        <SearchParamsComponent key = 'search-params-component' searchParams={searchParams} setSearchParams={setSearchParams}/>
        <button key="searchButton" onClick={() => searchRecipes()} type="button">Search</button>
      </div>

      <SearchResultsComponent searchResults={searchResults} />

    </div>
  )
}

export default Recipes;