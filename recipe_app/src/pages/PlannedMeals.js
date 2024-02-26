import {useState, useEffect} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import NavBar from '../components/Nav';

const MealPlanner = () => {
  const [plannedMealData, setPlannedMealData] = useLocalStorage(
    {
      itemKey:`meal-plan`, 
      defaultData:{
        "monday": {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 5,
          "gaps": "no",
          "preparationMinutes": 10,
          "cookingMinutes": 0,
          "aggregateLikes": 1151,
          "healthScore": 100,
          "creditsText": "My Whole Food Life",
          "sourceName": "My Whole Food Life",
          "pricePerServing": 142.19,
          "extendedIngredients": [
            {
              "id": 2048,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "apple-cider-vinegar.jpg",
              "consistency": "LIQUID",
              "name": "apple cider vinegar",
              "nameClean": "apple cider vinegar",
              "original": "2 T apple cider vinegar",
              "originalName": "apple cider vinegar",
              "amount": 2,
              "unit": "T",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 1.987,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 1.987,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 11098,
              "aisle": "Produce",
              "image": "brussels-sprouts.jpg",
              "consistency": "SOLID",
              "name": "brussel sprouts",
              "nameClean": "brussels sprouts",
              "original": "1 bag Brussel sprouts",
              "originalName": "Brussel sprouts",
              "amount": 1,
              "unit": "bag",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "bag",
                  "unitLong": "bag"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "bag",
                  "unitLong": "bag"
                }
              }
            },
            {
              "id": 11124,
              "aisle": "Produce",
              "image": "sliced-carrot.png",
              "consistency": "SOLID",
              "name": "carrots",
              "nameClean": "carrot",
              "original": "3 small carrots shredded",
              "originalName": "carrots shredded",
              "amount": 3,
              "unit": "small",
              "meta": [
                "shredded"
              ],
              "measures": {
                "us": {
                  "amount": 3,
                  "unitShort": "small",
                  "unitLong": "smalls"
                },
                "metric": {
                  "amount": 3,
                  "unitShort": "small",
                  "unitLong": "smalls"
                }
              }
            },
            {
              "id": 11215,
              "aisle": "Produce",
              "image": "garlic.png",
              "consistency": "SOLID",
              "name": "garlic",
              "nameClean": "garlic",
              "original": "1 clove garlic minced",
              "originalName": "garlic minced",
              "amount": 1,
              "unit": "clove",
              "meta": [
                "minced"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "clove",
                  "unitLong": "clove"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "clove",
                  "unitLong": "clove"
                }
              }
            },
            {
              "id": 11216,
              "aisle": "Produce",
              "image": "ginger.png",
              "consistency": "SOLID",
              "name": "ginger",
              "nameClean": "ginger",
              "original": "1 tsp ginger minced",
              "originalName": "ginger minced",
              "amount": 1,
              "unit": "tsp",
              "meta": [
                "minced"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
                }
              }
            },
            {
              "id": 99134,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "hemp-oil.jpg",
              "consistency": "SOLID",
              "name": "hemp oil",
              "nameClean": "hemp oil",
              "original": "2 T hemp oil (or oil)",
              "originalName": "hemp oil (or oil)",
              "amount": 2,
              "unit": "T",
              "meta": [
                "(or oil)"
              ],
              "measures": {
                "us": {
                  "amount": 0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 9206,
              "aisle": "Beverages",
              "image": "orange-juice.jpg",
              "consistency": "LIQUID",
              "name": "juice of orange",
              "nameClean": "orange juice",
              "original": "Juice of 2 oranges",
              "originalName": "Juice of oranges",
              "amount": 2,
              "unit": "",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "",
                  "unitLong": ""
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "",
                  "unitLong": ""
                }
              }
            },
            {
              "id": 12142,
              "aisle": "Nuts",
              "image": "pecans.jpg",
              "consistency": "SOLID",
              "name": "pecans",
              "nameClean": "pecans",
              "original": "1/2 cup raw pecans",
              "originalName": "raw pecans",
              "amount": 0.5,
              "unit": "cup",
              "meta": [
                "raw"
              ],
              "measures": {
                "us": {
                  "amount": 0.5,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 49.5,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 2047,
              "aisle": "Spices and Seasonings",
              "image": "salt.jpg",
              "consistency": "SOLID",
              "name": "salt",
              "nameClean": "table salt",
              "original": "salt to taste",
              "originalName": "salt to taste",
              "amount": 4,
              "unit": "servings",
              "meta": [
                "to taste"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                },
                "metric": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                }
              }
            }
          ],
          "id": 496200,
          "title": "Brussel Sprouts Salad with Orange Ginger Dressing",
          "readyInMinutes": 10,
          "servings": 4,
          "sourceUrl": "http://mywholefoodlife.com/2014/05/02/brussel-sprouts-salad-with-orange-ginger-dressing/",
          "image": "https://spoonacular.com/recipeImages/496200-556x370.jpg",
          "imageType": "jpg",
          "summary": "Brussel Sprouts Salad with Orange Ginger Dressing is a hor d'oeuvre that serves 4. For <b>$1.42 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. One serving contains <b>216 calories</b>, <b>5g of protein</b>, and <b>16g of fat</b>. 1151 person were glad they tried this recipe. This recipe from My Whole Food Life requires pecans, ginger, juice of orange, and salt. From preparation to the plate, this recipe takes approximately <b>10 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> diet. With a spoonacular <b>score of 100%</b>, this dish is super. Similar recipes include <a href=\"https://spoonacular.com/recipes/brussel-sprouts-salad-with-orange-ginger-dressing-1295171\">Brussel Sprouts Salad with Orange Ginger Dressing</a>, <a href=\"https://spoonacular.com/recipes/kale-shaved-brussel-sprout-salad-with-ginger-miso-dressing-1100317\">Kale Shaved Brussel Sprout Salad with Ginger Miso Dressing</a>, and <a href=\"https://spoonacular.com/recipes/garlic-ginger-brussel-sprouts-1295059\">Garlic Ginger Brussel Sprouts</a>.",
          "cuisines": [],
          "dishTypes": [
            "side dish",
            "antipasti",
            "salad",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
          ],
          "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "whole 30",
            "vegan"
          ],
          "occasions": [],
          "winePairing": {
            "pairedWines": [
              "chardonnay",
              "sauvignon blanc",
              "gruener veltliner"
            ],
            "pairingText": "Salad on the menu? Try pairing with Chardonnay, Sauvignon Blanc, and Gruener Veltliner. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. You could try Maddalena Chardonnay. Reviewers quite like it with a 4.9 out of 5 star rating and a price of about 13 dollars per bottle.",
            "productMatches": [
              {
                "id": 434306,
                "title": "Maddalena Chardonnay",
                "description": "Barrel fermentation in French and American oak, malolactic fermentation, lees stirring, and sur lie aging develop this wine to its greatest potential. Maddalena Vineyard Chardonnay greets the nose with a potpourri of fruit-driven aromas, including citrus, guava, and orange peel. These aromas are complemented by a mineral element, described as \"wet stones.\" Forward fruit is also revealed in the mouth, which is accompanied by good structure and a long, crisp finish.",
                "price": "$12.989999771118164",
                "imageUrl": "https://spoonacular.com/productImages/434306-312x231.jpg",
                "averageRating": 0.9800000190734863,
                "ratingCount": 5,
                "score": 0.9175000190734863,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fmaddalena-chardonnay-2003%2F80755"
              }
            ]
          },
          "instructions": "Wash the Brusell sprouts, remove the ends and slice thin sideways.  You can also just shred them using a shredder or mandolin.Peel and shred carrotsAdd the Brussel sprouts, carrots and pecans to a bowl. In a small bowl, whisk the dressing ingredients together. Pour the dressing over the salad.  You can serve immediately, but I think the salad gets better if it sits a couple hours.  The flavors really marinate and develop more the longer is sits. This should last 4-5 days in the fridge. Enjoy!",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "Wash the Brusell sprouts, remove the ends and slice thin sideways.  You can also just shred them using a shredder or mandolin.Peel and shred carrots",
                  "ingredients": [
                    {
                      "id": 11124,
                      "name": "carrot",
                      "localizedName": "carrot",
                      "image": "sliced-carrot.png"
                    },
                    {
                      "id": 11001,
                      "name": "sprouts",
                      "localizedName": "sprouts",
                      "image": "alfalfa-sprouts.png"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 2,
                  "step": "Add the Brussel sprouts, carrots and pecans to a bowl. In a small bowl, whisk the dressing ingredients together.",
                  "ingredients": [
                    {
                      "id": 11098,
                      "name": "brussels sprouts",
                      "localizedName": "brussels sprouts",
                      "image": "brussels-sprouts.jpg"
                    },
                    {
                      "id": 11124,
                      "name": "carrot",
                      "localizedName": "carrot",
                      "image": "sliced-carrot.png"
                    },
                    {
                      "id": 12142,
                      "name": "pecans",
                      "localizedName": "pecans",
                      "image": "pecans.jpg"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404661,
                      "name": "whisk",
                      "localizedName": "whisk",
                      "image": "whisk.png"
                    },
                    {
                      "id": 404783,
                      "name": "bowl",
                      "localizedName": "bowl",
                      "image": "bowl.jpg"
                    }
                  ]
                },
                {
                  "number": 3,
                  "step": "Pour the dressing over the salad.  You can serve immediately, but I think the salad gets better if it sits a couple hours.  The flavors really marinate and develop more the longer is sits. This should last 4-5 days in the fridge. Enjoy!",
                  "ingredients": [],
                  "equipment": []
                }
              ]
            }
          ],
          "originalId": null,
          "spoonacularScore": 99.96134185791016
        },
        "tuesday": {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 8,
          "gaps": "no",
          "preparationMinutes": 10,
          "cookingMinutes": 40,
          "aggregateLikes": 433,
          "healthScore": 100,
          "creditsText": "The Roasted Root",
          "sourceName": "The Roasted Root",
          "pricePerServing": 227.58,
          "extendedIngredients": [
            {
              "id": 9003,
              "aisle": "Produce",
              "image": "apple.jpg",
              "consistency": "SOLID",
              "name": "honeycrisp apple",
              "nameClean": "apple",
              "original": "1 honeycrisp apple, peeled, cored, and chopped",
              "originalName": "honeycrisp apple, peeled, cored, and chopped",
              "amount": 1,
              "unit": "",
              "meta": [
                "cored",
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
              "id": 11485,
              "aisle": "Produce",
              "image": "butternut-squash.jpg",
              "consistency": "SOLID",
              "name": "butternut squash",
              "nameClean": "butternut squash",
              "original": "½ small butternut squash, peeled and chopped (3 cups)",
              "originalName": "½ small butternut squash, peeled and chopped",
              "amount": 3,
              "unit": "cups",
              "meta": [
                "peeled",
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 3,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 420,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 11143,
              "aisle": "Produce",
              "image": "celery.jpg",
              "consistency": "SOLID",
              "name": "celery",
              "nameClean": "celery",
              "original": "2 stalks celery, chopped",
              "originalName": "celery, chopped",
              "amount": 2,
              "unit": "stalks",
              "meta": [
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "stalks",
                  "unitLong": "stalks"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "stalks",
                  "unitLong": "stalks"
                }
              }
            },
            {
              "id": 2009,
              "aisle": "Spices and Seasonings",
              "image": "chili-powder.jpg",
              "consistency": "SOLID",
              "name": "chili powder",
              "nameClean": "chili powder",
              "original": "1 tablespoon chili powder",
              "originalName": "chili powder",
              "amount": 1,
              "unit": "tablespoon",
              "meta": [],
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
              "id": 2048,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "apple-cider-vinegar.jpg",
              "consistency": "LIQUID",
              "name": "cider vinegar",
              "nameClean": "apple cider vinegar",
              "original": "1 tablespoon cider vinegar",
              "originalName": "cider vinegar",
              "amount": 1,
              "unit": "tablespoon",
              "meta": [],
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
              "id": 11165,
              "aisle": "Spices and Seasonings",
              "image": "cilantro.png",
              "consistency": "SOLID",
              "name": "cilantro",
              "nameClean": "cilantro",
              "original": "Fresh cilantro, chopped",
              "originalName": "Fresh cilantro, chopped",
              "amount": 4,
              "unit": "servings",
              "meta": [
                "fresh",
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                },
                "metric": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                }
              }
            },
            {
              "id": 1012010,
              "aisle": "Spices and Seasonings",
              "image": "cinnamon.jpg",
              "consistency": "SOLID",
              "name": "ground cinnamon",
              "nameClean": "ground cinnamon",
              "original": "½ teaspoon ground cinnamon",
              "originalName": "ground cinnamon",
              "amount": 0.5,
              "unit": "teaspoon",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 1012014,
              "aisle": "Spices and Seasonings",
              "image": "ground-cumin.jpg",
              "consistency": "SOLID",
              "name": "ground cumin",
              "nameClean": "ground cumin",
              "original": "2 teaspoons ground cumin",
              "originalName": "ground cumin",
              "amount": 2,
              "unit": "teaspoons",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 1012038,
              "aisle": "Spices and Seasonings",
              "image": "dried-sage.png",
              "consistency": "SOLID",
              "name": "ground sage",
              "nameClean": "ground sage",
              "original": "½ teaspoon ground sage",
              "originalName": "ground sage",
              "amount": 0.5,
              "unit": "teaspoon",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 11233,
              "aisle": "Produce",
              "image": "kale.jpg",
              "consistency": "SOLID",
              "name": "dino kale leaves",
              "nameClean": "kale",
              "original": "4 cups dino kale leaves, tightly packed",
              "originalName": "dino kale leaves, tightly packed",
              "amount": 4,
              "unit": "cups",
              "meta": [
                "packed"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 268,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 1082047,
              "aisle": "Spices and Seasonings",
              "image": "salt.jpg",
              "consistency": "SOLID",
              "name": "kosher salt",
              "nameClean": "kosher salt",
              "original": "½ teaspoon kosher salt",
              "originalName": "kosher salt",
              "amount": 0.5,
              "unit": "teaspoon",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 4053,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "olive-oil.jpg",
              "consistency": "SOLID",
              "name": "olive oil",
              "nameClean": "olive oil",
              "original": "2 tablespoons grapeseed or olive oil",
              "originalName": "grapeseed or olive oil",
              "amount": 2,
              "unit": "tablespoons",
              "meta": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 1001116,
              "aisle": "Milk, Eggs, Other Dairy",
              "image": "plain-yogurt.jpg",
              "consistency": "LIQUID",
              "name": "cream/plain yogurt",
              "nameClean": "plain yogurt",
              "original": "Sour cream/plain yogurt",
              "originalName": "Sour cream/plain yogurt",
              "amount": 4,
              "unit": "servings",
              "meta": [
                "sour"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                },
                "metric": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                }
              }
            },
            {
              "id": 10016409,
              "aisle": "Health Foods",
              "image": "soy-beans.png",
              "consistency": "SOLID",
              "name": "soy beans",
              "nameClean": "canned soybeans",
              "original": "1 15-ounce can black soy beans, drained and rinsed",
              "originalName": "black soy beans, drained and rinsed",
              "amount": 15,
              "unit": "ounce",
              "meta": [
                "black",
                "drained and rinsed",
                "canned"
              ],
              "measures": {
                "us": {
                  "amount": 15,
                  "unitShort": "oz",
                  "unitLong": "ounces"
                },
                "metric": {
                  "amount": 425.243,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 11507,
              "aisle": "Produce",
              "image": "sweet-potato.png",
              "consistency": "SOLID",
              "name": "sweet potato",
              "nameClean": "sweet potato",
              "original": "½ medium sweet potato, chopped (1-1/2 cups)",
              "originalName": "½ medium sweet potato, chopped",
              "amount": 1.5,
              "unit": "cups",
              "meta": [
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 1.5,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 199.5,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 99253,
              "aisle": "Canned and Jarred",
              "image": "chicken-broth.png",
              "consistency": "LIQUID",
              "name": "vegetable broth",
              "nameClean": "low sodium vegetable broth",
              "original": "3 cups low-sodium vegetable broth*",
              "originalName": "low-sodium vegetable broth",
              "amount": 3,
              "unit": "cups",
              "meta": [
                "low-sodium"
              ],
              "measures": {
                "us": {
                  "amount": 3,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 720,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 10511282,
              "aisle": "Produce",
              "image": "brown-onion.png",
              "consistency": "SOLID",
              "name": "onion",
              "nameClean": "yellow onion",
              "original": "1 large yellow onion, chopped",
              "originalName": "yellow onion, chopped",
              "amount": 1,
              "unit": "large",
              "meta": [
                "yellow",
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "large",
                  "unitLong": "large"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "large",
                  "unitLong": "large"
                }
              }
            }
          ],
          "id": 620174,
          "title": "Fall Harvest Vegetarian Chili with Kale + Giveaway",
          "readyInMinutes": 50,
          "servings": 4,
          "sourceUrl": "http://www.theroastedroot.net/fall-harvest-vegetarian-chili-kale/",
          "image": "https://spoonacular.com/recipeImages/620174-556x370.jpg",
          "imageType": "jpg",
          "summary": "Forget going out to eat or ordering takeout every time you crave American food. Try making Fall Harvest Vegetarian Chili with Kale + Giveaway at home. This recipe serves 4. Watching your figure? This gluten free and lacto ovo vegetarian recipe has <b>424 calories</b>, <b>23g of protein</b>, and <b>18g of fat</b> per serving. For <b>$2.28 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. 433 people have tried and liked this recipe. Plenty of people really liked this main course. From preparation to the plate, this recipe takes roughly <b>50 minutes</b>. <b>The Super Bowl</b> will be even more special with this recipe. A mixture of ground cinnamon, cream/plain yogurt, sweet potato, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by The Roasted Root. Taking all factors into account, this recipe <b>earns a spoonacular score of 100%</b>, which is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/fall-harvest-vegetarian-chili-with-kale-giveaway-1283193\">Fall Harvest Vegetarian Chili with Kale + Giveaway</a>, <a href=\"https://spoonacular.com/recipes/fall-harvest-vegetarian-chili-with-kale-giveaway-1208507\">Fall Harvest Vegetarian Chili with Kale + Giveaway</a>, and <a href=\"https://spoonacular.com/recipes/fall-harvest-vegetarian-chili-with-kale-giveaway-1222415\">Fall Harvest Vegetarian Chili with Kale + Giveaway</a>.",
          "cuisines": [
            "American"
          ],
          "dishTypes": [
            "soup",
            "lunch",
            "main course",
            "main dish",
            "dinner"
          ],
          "diets": [
            "gluten free",
            "lacto ovo vegetarian"
          ],
          "occasions": [
            "super bowl",
            "fall"
          ],
          "winePairing": {
            "pairedWines": [
              "cava",
              "shiraz",
              "grenache"
            ],
            "pairingText": "Chili works really well with Cava, Shiraz, and Grenache. These juicy reds don't have too much tannin (important for spicy foods), but a sparkling wine like cava can tame the heat even better. The Juve Y Camps Brut Nature Reserva de la Familia Cava with a 4.3 out of 5 star rating seems like a good match. It costs about 16 dollars per bottle.",
            "productMatches": [
              {
                "id": 433977,
                "title": "Juve Y Camps Brut Nature Reserva de la Familia Cava",
                "description": "Pale gold in color, this Cava has aromas of mature white peach, toasted bread and green tea with hints of lemon citrus and apricots. Equally rich and broad on the palate, these flavors continue to unfold on the palate.Its fresh profile makes it a perfect match for pate, seafood, tapas, paellas, grilled poultry or cured meats.",
                "price": "$15.989999771118164",
                "imageUrl": "https://spoonacular.com/productImages/433977-312x231.jpg",
                "averageRating": 0.8600000143051147,
                "ratingCount": 10,
                "score": 0.8277419497889857,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fjuve-y-camps-brut-nature-reserva-de-la-familia-cava-2011%2F150306"
              }
            ]
          },
          "instructions": "Add the first 6 ingredients to a large stock pot and heat to medium.Saut, stirring frequently, until mixture is very fragrant and veggies begin to soften, about 10 minutes.Add the next 5 ingredients (spices + salt), and continue sauting for 2 minutes.Add the last four ingredients and stir well. Cover pot and bring to a boil.Lower the heat to a simmer and continue to cook at a gentle boil for 20 to 30 minutes, or until vegetables have softened.Serve with a dollop of plain yogurt or sour cream and fresh cilantro.",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "Add the first 6 ingredients to a large stock pot and heat to medium.Saut, stirring frequently, until mixture is very fragrant and veggies begin to soften, about 10 minutes.",
                  "ingredients": [
                    {
                      "id": 1006615,
                      "name": "stock",
                      "localizedName": "stock",
                      "image": "chicken-broth.png"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404752,
                      "name": "pot",
                      "localizedName": "pot",
                      "image": "stock-pot.jpg"
                    }
                  ],
                  "length": {
                    "number": 10,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 2,
                  "step": "Add the next 5 ingredients (spices + salt), and continue sauting for 2 minutes.",
                  "ingredients": [
                    {
                      "id": 2035,
                      "name": "spices",
                      "localizedName": "spices",
                      "image": "spices.png"
                    },
                    {
                      "id": 2047,
                      "name": "salt",
                      "localizedName": "salt",
                      "image": "salt.jpg"
                    }
                  ],
                  "equipment": [],
                  "length": {
                    "number": 2,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 3,
                  "step": "Add the last four ingredients and stir well. Cover pot and bring to a boil.Lower the heat to a simmer and continue to cook at a gentle boil for 20 to 30 minutes, or until vegetables have softened.",
                  "ingredients": [
                    {
                      "id": 11583,
                      "name": "vegetable",
                      "localizedName": "vegetable",
                      "image": "mixed-vegetables.png"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404752,
                      "name": "pot",
                      "localizedName": "pot",
                      "image": "stock-pot.jpg"
                    }
                  ],
                  "length": {
                    "number": 20,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 4,
                  "step": "Serve with a dollop of plain yogurt or sour cream and fresh cilantro.",
                  "ingredients": [
                    {
                      "id": 11165,
                      "name": "fresh cilantro",
                      "localizedName": "fresh cilantro",
                      "image": "cilantro.png"
                    },
                    {
                      "id": 1001116,
                      "name": "plain yogurt",
                      "localizedName": "plain yogurt",
                      "image": "plain-yogurt.jpg"
                    },
                    {
                      "id": 1056,
                      "name": "sour cream",
                      "localizedName": "sour cream",
                      "image": "sour-cream.jpg"
                    }
                  ],
                  "equipment": []
                }
              ]
            }
          ],
          "originalId": null,
          "spoonacularScore": 99.90559387207031
        },
        "wednesday": {
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
        },
        "thursday": "",
        "friday": ""
      }
    }
  );

  return(
    <div>
      <NavBar/>
      <div className = 'planner-container'>
        {Object.entries(plannedMealData).map(([key, value]) => (
          <div className='planned-meal-item' key={key}>
            <h2>{key}</h2>
            {value !== '' && (
              <div> 
                <h2>{value['title']}</h2>
                <ul>
                  {value['extendedIngredients'].map((x, index) => (
                    <li key={index}>{x['original']}</li>
                  ))}
                </ul>
                <p dangerouslySetInnerHTML={{ __html: value['summary'] }}></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

}

export default MealPlanner;