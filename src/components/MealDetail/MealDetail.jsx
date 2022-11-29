import React from 'react'
import './MealDetail.css'

const MealDetail = ({meal}) => {
  return (
    <div className='mealDetailDesign'>
            <h3>{meal.strMeal}</h3>
            <h3>{meal.strCategory}</h3>
            <h3>{meal.strArea}</h3>
            <img className='detailPic' alt={meal.strMeal}>{meal.strMealThumb}</img>
            <p>{meal.strInstrunctions}</p>
            {/* <div> <img className='detailPic' src={`https://image.tmdb.org/t/p/original${meal.poster_path}`} alt={meal.title}/></div> */}
        </div>
  )
}

export default MealDetail;