import {useParams} from 'react-router-dom';
import {PureComponent, useEffect, useState} from 'react';
import NavBar from '../components/Nav';
import useLocalStorage from '../hooks/useLocalStorage';

const Ingrediants = ({recipeData}) => {
  const IngrediantList = () => {
    return( 
      <ul>
        {recipeData['extendedIngredients'].map( (x) =>
          { return (
              <li key={x['id']}>
                {x['original']}
              </li>
            )
          }        
        )}
      </ul>
    )
  }

  return( 
    'extendedIngredients' in recipeData && <IngrediantList/>
  )
}

const AddToPlanner = ({recipeData}) => {
  const [plannedMealData, setPlannedMealData] = useLocalStorage(
    {
      itemKey:`meal-plan`, 
      defaultData:{'monday':'', 'tuesday' : '', 'wednesday' : '', 'thursday' : '', 'friday':''}
    }
  );
  let day = '';
  
  const handleClick = (event) => {
    day = event.target.value;
  }

const handleSendToPlanner = () => {
    if (day !== '') {
        setPlannedMealData(
            Object.entries(plannedMealData).reduce((acc, [key, value]) => {
                if (key === day) {
                    acc[key] = recipeData;
                } else {
                    acc[key] = value;
                }
                return acc;
            }, {})
        );
    }
}

  return (
    <div>
      <select onClick={(event) => handleClick(event)}>
        <option value = ''>Select Day</option>
        <option value = 'monday'> Monday </option>
        <option value = 'tuesday'> Tuesday </option>
        <option value = 'wednesday'> Wednesday</option>
        <option value = 'thursday'> Thursday </option>
        <option value = 'friday'> Friday </option>
      </select>
      <button onClick={() => handleSendToPlanner()}>Send to Planner</button>
    </div>
  )
}


function RecipeInfo() {

  const [XRapidAPIKey,setXRapidAPIKey] = useState(null);

  let {id} = useParams();

  // pre-set for testing
  const[recipeData, setRecipeData] = useState({
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 1,
    "gaps": "no",
    "preparationMinutes": 10,
    "cookingMinutes": 0,
    "aggregateLikes": 8213,
    "healthScore": 87,
    "creditsText": "Eating Well",
    "sourceName": "Eating Well",
    "pricePerServing": 90.48,
    "extendedIngredients": [
      {
        "id": 9003,
        "aisle": "Produce",
        "image": "apple.jpg",
        "consistency": "SOLID",
        "name": "apple",
        "nameClean": "apple",
        "original": "1 ripe pear or apple, peeled if desired, chopped",
        "originalName": "ripe pear or apple, peeled if desired, chopped",
        "amount": 1,
        "unit": "",
        "meta": [
          "ripe",
          "peeled",
          "chopped"
        ],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 9040,
        "aisle": "Produce",
        "image": "bananas.jpg",
        "consistency": "SOLID",
        "name": "bananas",
        "nameClean": "banana",
        "original": "2 ripe medium bananas",
        "originalName": "ripe medium bananas",
        "amount": 2,
        "unit": "medium",
        "meta": [
          "ripe"
        ],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "medium",
            "unitLong": "mediums"
          },
          "metric": {
            "amount": 2,
            "unitShort": "medium",
            "unitLong": "mediums"
          }
        }
      },
      {
        "id": 12220,
        "aisle": "Baking",
        "image": "flax-seeds.png",
        "consistency": "SOLID",
        "name": "ground flaxseed",
        "nameClean": "ground flaxseed",
        "original": "1 tablespoon ground flaxseed (see Notes)",
        "originalName": "ground flaxseed (see Notes)",
        "amount": 1,
        "unit": "tablespoon",
        "meta": [
          "(see Notes)"
        ],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 10014412,
        "aisle": "Frozen",
        "image": "ice-cubes.png",
        "consistency": "SOLID",
        "name": "ice cubes",
        "nameClean": "ice",
        "original": "12 ice cubes",
        "originalName": "ice cubes",
        "amount": 12,
        "unit": "",
        "meta": [],
        "measures": {
          "us": {
            "amount": 12,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 12,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 11233,
        "aisle": "Produce",
        "image": "kale.jpg",
        "consistency": "SOLID",
        "name": "kale leaves",
        "nameClean": "kale",
        "original": "2 cups chopped kale leaves, tough stems removed (see Notes)",
        "originalName": "chopped kale leaves, tough stems removed (see Notes)",
        "amount": 2,
        "unit": "cups",
        "meta": [
          "chopped",
          "(see Notes)"
        ],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 134,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 9206,
        "aisle": "Beverages",
        "image": "orange-juice.jpg",
        "consistency": "LIQUID",
        "name": "orange juice",
        "nameClean": "orange juice",
        "original": "1/2 cup cold orange juice",
        "originalName": "cold orange juice",
        "amount": 0.5,
        "unit": "cup",
        "meta": [
          "cold"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 124,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 14412,
        "aisle": "Beverages",
        "image": "water.png",
        "consistency": "LIQUID",
        "name": "water",
        "nameClean": "water",
        "original": "1/2 cup cold water",
        "originalName": "cold water",
        "amount": 0.5,
        "unit": "cup",
        "meta": [
          "cold"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 118.294,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      }
    ],
    "id": 695486,
    "title": "Green Smoothie",
    "readyInMinutes": 10,
    "servings": 2,
    "sourceUrl": "http://www.eatingwell.com/recipes/green_smoothie.html",
    "image": "https://spoonacular.com/recipeImages/695486-556x370.jpg",
    "imageType": "jpg",
    "summary": "Green Smoothie takes about <b>10 minutes</b> from beginning to end. This breakfast has <b>222 calories</b>, <b>5g of protein</b>, and <b>3g of fat</b> per serving. For <b>90 cents per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by Eating Well. 8213 people were impressed by this recipe. Head to the store and pick up apple, orange juice, ice cubes, and a few other things to make it today. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 100%</b>, this dish is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/how-to-build-a-perfect-smoothie-a-chocolate-mint-green-smoothie-495508\">How to Build a Perfect Smoothie (+ a Chocolate Mint Green Smoothie !)</a>, <a href=\"https://spoonacular.com/recipes/how-to-build-a-perfect-smoothie-a-chocolate-mint-green-smoothie-1203205\">How to Build a Perfect Smoothie (+ a Chocolate Mint Green Smoothie !)</a>, and <a href=\"https://spoonacular.com/recipes/pineapple-strawberry-smoothie-and-green-smoothie-ebook-719331\">Pineapple Strawberry Smoothie and Green Smoothie Ebook</a>.",
    "cuisines": [],
    "dishTypes": [
      "morning meal",
      "brunch",
      "beverage",
      "breakfast",
      "drink"
    ],
    "diets": [
      "gluten free",
      "dairy free",
      "paleolithic",
      "lacto ovo vegetarian",
      "primal",
      "vegan"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [],
      "pairingText": "",
      "productMatches": []
    },
    "instructions": null,
    "analyzedInstructions": [],
    "originalId": null,
    "spoonacularScore": 99.97187042236328
  });

  const fetchRecipe = async () => {
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
    let options = {
      method : 'GET',
      headers: {
        'X-RapidAPI-Key': XRapidAPIKey,
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      let response = await fetch(url, options);
      let results = await response.json();
      setRecipeData(results);
    } catch (e) {
      console.error(e);
    }
  }

  // Get the x-rapidAPI-key to make recipe request
  const gedRapidAPIKey = async () => {
    let x_rateLimitAPI_key = process.env.REACT_APP_AUTH_X_API_KEY
    let response = await fetch ('https://ratelimitcounter.onrender.com/api/recipe-app/auth', {
      method:'GET',
      headers : {
        'x-api-key' : x_rateLimitAPI_key
      }
    })

    let responseData = await response.json();
    
    return(responseData);
  }

  // Render data on page load
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await gedRapidAPIKey();

      // response data can be {"auth_key": X} if limit is not exceeded, else it is {"message":message}
      if("auth_key" in responseData){
        setXRapidAPIKey(responseData['auth_key']);  
      } else if ('message' in responseData) {
        // else there is an error of some sort... set this for the notification to the user
        console.error(responseData['message'])
        setXRapidAPIKey(null);
      } else {
        console.error('unknown server error calling rate limit counter');
        setXRapidAPIKey(null);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    // we can only fetch recipes if we have the api key
    if(XRapidAPIKey != null){
      fetchRecipe();
    }
  },[XRapidAPIKey])

  return(
    <div className='recipe-info-page'>
        <NavBar />
        {recipeData.length !== 0 &&
          (
            <div>
              <h1> {recipeData['title']} </h1>
              <img src={recipeData['image']}/>
              <div dangerouslySetInnerHTML={{ __html: recipeData['summary'] }} />
              <Ingrediants recipeData={recipeData} />
            </div>
          )
        }
        <AddToPlanner recipeData={recipeData} />
    </div>
  );

}





export default RecipeInfo;