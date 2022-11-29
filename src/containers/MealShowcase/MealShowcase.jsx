import React from "react";
import { bringAllRecipes } from "../../services/apiCalls";
import { useState, useEffect } from "react";
import MealCard from "../../components/MealCard/MealCard";

const MealShowcase = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (recipes.length === 0) {
      bringAllRecipes()
        .then((res) => {
          //we store the results at the hook...
          setRecipes(res);
        })
        .catch((error) => console.log(error));
    }
  }, [recipes]);

  console.log(recipes);

  return (
    <div className="showcaseDesign">
      <h3>Meal showcase</h3>
      <div className="recipeWrap">
        {recipes.length > 0 &&
          recipes.map((recipes) => {
            return <MealCard value={recipes} key={recipes.idMeal} />;
          })}
      </div>
    </div>
  );
};

export default MealShowcase;
