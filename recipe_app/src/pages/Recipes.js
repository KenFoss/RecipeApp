import {useEffect, useState, useRef, createRef} from 'react';
import NavBar from '../components/Nav.js'
import { useNavigate } from 'react-router-dom';
import { getAllByRole } from '@testing-library/react';
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
  const [imgHover, setImgHover] = useState({});
  let navigate = useNavigate();

  const handleImgHover = (e, id) => {
    if (e.type=='mouseenter'){
      setImgHover( () => {
          if(id in imgHover){
            return (
              Object.entries(imgHover).reduce( (acc, [key, value]) => {
                if(acc[key] == id) {
                  acc[key] = true;
                }
                return acc;
              }, {} )
            )
          } else {
            return (
              {
                ...imgHover,
                [id]:true
              }
            )
          }
        }
      );
    } else if (e.type='mouseleave') {
      setImgHover( () => {
        if(id in imgHover){
          return (
            Object.entries(imgHover).reduce( (acc, [key, value]) => {
              if(acc[key] == id) {
                acc[key] = false;
              }
              return acc;
            }, {} )
          )
        } else {
          return (
            {
              ...imgHover,
              [id]:false
            }
          )
        }
      }
    );
    }
  }

  return (
    <div className='search-results-component'>
    {  searchResults.map( (x) => {
        return(
          <div className = 'recipe-item' key={`recipe-${x['id']}`}>
            <div className = {`recipe-img-containter-${imgHover[x['id']] ? 'hover' : 'norm'}`} onMouseEnter={(e) => {handleImgHover(e, x['id'])}} onMouseLeave={(e) => {handleImgHover(e, x['id'])}}>
              <img src={x['image']} onClick={() => navigate(`/recipe-info/${x['id']}`)} alt={`Picture of ${x['title']} Recipe`} />
            </div>
            <h3>{x['title']}</h3>
          </div>
        )
      })}
  </div>
  )
}

const SearchAlertComponent = ({showSearchAlert, alertMessage}) => {
  return(
    showSearchAlert && <div className='recipe-search-alert'>
      {alertMessage}
    </div>
  )
}


function Recipes () {

  const [searchParams, setSearchParams] = useState({
    'includeIngrediants' : createRef(''),
    'excludeIngrediants' : createRef('')
  });

  const [searchResults, setSearchResults] = useState([
    {
      "id": 473243,
      "title": "Green Lemonade",
      "image": "https://spoonacular.com/recipeImages/473243-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 695486,
      "title": "Green Smoothie",
      "image": "https://spoonacular.com/recipeImages/695486-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 516705,
      "title": "Kale Smoothie (Delicious, Healthy and Vegan!)",
      "image": "https://spoonacular.com/recipeImages/516705-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 496200,
      "title": "Brussel Sprouts Salad with Orange Ginger Dressing",
      "image": "https://spoonacular.com/recipeImages/496200-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 588272,
      "title": "Spicy thai carrot and kale salad",
      "image": "https://spoonacular.com/recipeImages/588272-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 994167,
      "title": "Broccoli Stem Noodles with Sesame Ginger Dressing",
      "image": "https://spoonacular.com/recipeImages/994167-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 515839,
      "title": "Green Juice in a Blender",
      "image": "https://spoonacular.com/recipeImages/515839-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 620174,
      "title": "Fall Harvest Vegetarian Chili with Kale + Giveaway",
      "image": "https://spoonacular.com/recipeImages/620174-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 505014,
      "title": "Green Apple Smoothie for St. Paddy’s Day",
      "image": "https://spoonacular.com/recipeImages/505014-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 537873,
      "title": "The Body Book™ Green Smoothie",
      "image": "https://spoonacular.com/recipeImages/537873-312x231.jpg",
      "imageType": "jpg"
    }
  ]);
  const [XRapidAPIKey,setXRapidAPIKey] = useState(null);
  const [alertMessage, setAlertMessage] = useState('Unknown issue, unable to search for recipes');
  const [showSearchAlert, setShowSearchAlert] = useState(false);
  const [triggerRateLimit, setTriggerRateLimit] = useState(false);

  let x_rateLimitAPI_key = process.env.REACT_APP_AUTH_X_API_KEY

  // let x_rapidAPI_key = null;


  // METHODS

  // Get the x-rapidAPI-key to make recipe request
  const gedRapidAPIKey = async () => {
    let response = await fetch ('https://ratelimitcounter.onrender.com/api/recipe-app/auth', {
      method:'GET',
      headers : {
        'x-api-key' : x_rateLimitAPI_key
      }
    })

    let responseData = await response.json();
    
    return(responseData);
  }

  // set the showSearchAlert variable (which if true renders the alert) based on event on the search button
  const handleShowSearchAlert = (enterState) => {
    if (enterState=='enter' && XRapidAPIKey==null){
      setShowSearchAlert(true);
    } else if (enterState='leave') {
      setShowSearchAlert(false);
    }
  }

  // set alert message based on contents of api response, 

  const searchRecipes = async() => {
    let includeIngrediants = searchParams['includeIngrediants'].current.value.split(',');
    let excludeIngrediants = searchParams['excludeIngrediants'].current.value.split(',');

    // We cannot call the api without a key, 
    if(XRapidAPIKey == null) {
      return;
    }

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
        'X-RapidAPI-Key': XRapidAPIKey,
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    // increment the rate limit counter
    setTriggerRateLimit(!triggerRateLimit);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchResults(result['results'])
    } catch (error) {
      console.error(error);
    }
  }

  // ON RENDER
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await gedRapidAPIKey();

      // response data can be {"auth_key": X} if limit is not exceeded, else it is {"message":message}
      if("auth_key" in responseData){
        setXRapidAPIKey(responseData['auth_key']);  
      } else if ('message' in responseData) {
        // else there is an error of some sort... set this for the notification to the user
        setAlertMessage(responseData['message']);
        setXRapidAPIKey(null);
      } else {
        setXRapidAPIKey(null);
      }
    }
    fetchData();
  },[triggerRateLimit])

  // RESPONSE BODY/JSX

  return (
    <div className='recipe-page'>
      <NavBar />

      <div className='search-controls'>
        <h1> Browse Our Recipes! </h1>

        <SearchParamsComponent key = 'search-params-component' searchParams={searchParams} setSearchParams={setSearchParams}/>
         {/* Cannot search without rapid api key, do not render the button until this is gathered */}
         <div className='recipe-search-box'>
          <button key="searchButton" onClick={() => searchRecipes()} onMouseEnter={() => handleShowSearchAlert('enter')} onMouseLeave={() => handleShowSearchAlert('leave')} type="button">Search</button> 
          <SearchAlertComponent showSearchAlert={showSearchAlert} alertMessage={alertMessage}/>
         </div>
      
      </div>

      {/* Cannot search without rapid api key, do not render the button until this is gathered */}
      <SearchResultsComponent 
        searchResults={searchResults} 
      />

    </div>
  )
}

export default Recipes;