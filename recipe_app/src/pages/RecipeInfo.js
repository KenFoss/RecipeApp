import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import NavBar from '../components/Nav';

function RecipeInfo() {

  let {id} = useParams();

  const[recipeData, setRecipeData] = useState({});

  const fetchRecipe = async () => {
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
    let options = {
      method : 'GET',
      headers: {
        'X-RapidAPI-Key': '783f42985dmsh2295ac8603f8f85p138243jsna3dec0c5402a',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      let response = await fetch(url, options);
      let results = await response.json();
      console.log('recipe info');
      console.log(results);
      setRecipeData(results);
    } catch (e) {
      console.error(e);
    }
  }

  // Render data on page load
  useEffect(() => {
    fetchRecipe();
  }, [])

  return(
    <div className='recipe-info-page'>
        <NavBar />
        {recipeData.length !== 0 &&
          (
            <div>
              <h1> {recipeData['title']} </h1>
              <img src={recipeData['image']}/>
              <body> {recipeData['instructions']}</body>
            </div>
          )
        }
    </div>
  );

}





export default RecipeInfo;