import React from 'react'
import './MealCard.css'

const MealCard = (props) => {
    return (
        <div className='mealCardDesign'>
            <div className='mealCardTitle'>{props.value.strMeal}</div>
            <img className='detailPic' alt={props.value.strMeal} src={props.value.strMealThumb}></img>
            <div className='mealCardInfo'>
                <div className='cardInfo'>{props.value.strCategory}</div>
                <div className='cardInfo'>{props.value.strArea}</div>
            </div>
        </div>
    )
}

export default MealCard;