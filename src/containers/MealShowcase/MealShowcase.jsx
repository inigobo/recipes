import React from "react";
import { bringRandomRecipe } from "../../services/apiCalls";

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

    return (
        <div className='showcaseDesign'>
            <div className='recipeWrap'>
                {
                    recipes.length > 0 &&

                    recipes.map(
                        recipe => {
                            return (

                                <MealCard value={recipe} key={recipe.id} />

                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default MealShowcase;