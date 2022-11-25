import React from "react";
import { bringRandomRecipe } from "../../services/apiCalls";
import { useState, useEffect } from "react";
import MealDetail from "../../components/MealDetail/MealDetail";
const MealShowcase = () => {
    const [recipes, setRecipes] = useState([]);



    useEffect(() => {

        if (recipes.length === 0) {

            for (let i = 0; i < 9; i++) {
                bringRandomRecipe()
                    .then(
                        res => {

                            //we store the results at the hook...

                            setRecipes((prevRecipes) => {
                                return [res.data.results, ...prevRecipes]
                            }

                            )
                        }
                    )
                    .catch(error => console.log(error));
            }
        }
    }, [recipes])
    console.log(recipes);

    return (
        <div className='showcaseDesign'>
            <div className='recipeWrap'>
                {
                    recipes.length > 0 &&

                    recipes.map(
                        recipe => {
                            return (

                                <MealDetail value={recipe} key={recipe.id} />
                

                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default MealShowcase;