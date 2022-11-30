import React from "react";
import { bringAllRecipes } from "../../services/apiCalls";
import { useState, useEffect } from "react";
import MealCard from "../../components/MealCard/MealCard";

import "./MealShowcase.css";

const MealShowcase = () => {
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
            <div className="showcaseTitle">Meal showcase</div>
            <div className='recipeWrap'>
                {
                    recipes.length > 0 &&

                    recipes.map(
                        recipe => {
                            return (
                                <MealCard value={recipe} key={recipe.idMeal} />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default MealShowcase;
