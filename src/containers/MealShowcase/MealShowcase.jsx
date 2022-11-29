import React from "react";
import { bringAllRecipes, bringRandomRecipe } from "../../services/apiCalls";
import { useState, useEffect } from "react";
import MealCard from "../../components/MealCard/MealCard";
const MealShowcase = () => {
    //const [recipes, setRecipes] = useState(require('../../Assets/recipes-sample.json'));
    const [recipes, setRecipes] = useState([]);



    useEffect(() => {

        if (recipes.length === 0) {


                bringAllRecipes()
                    .then(
                        res => {
                            //we store the results at the hook...
                            setRecipes(res)
                        }
                    )
                    .catch(error => console.log(error));

        }
    }, [recipes])
    console.log("Showing all...")
    console.log(recipes);

    return (
        <div className='showcaseDesign'>
            <h3>Meal showcase</h3>
            <div className='recipeWrap'>
                {
                    recipes.length > 0 &&

                    recipes.map(
                        recipe => {
                            return (

                                <MealCard value={recipe} key={recipe.meals[0].idMeal} />

                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default MealShowcase;