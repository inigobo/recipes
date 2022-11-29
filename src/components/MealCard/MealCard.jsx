import React from 'react'
import './MealCard.css'

const MealCard = ({meal}) => {
    return (
        <div className='mealCardDesign'>
            <h3>{meal.strMeal}</h3>
            <h3>{meal.strCategory}</h3>
            <h3>{meal.strArea}</h3>
            {/* <img className='detailPic' alt={meal.strMeal} src={meal.strMealThumb}></img> */}
        </div>
    )
}

export default MealCard;