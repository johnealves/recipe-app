import React, { useEffect, useState } from 'react';
import IngredientList from '../Components/IngredientList';
import { requestMealById } from '../services/recipiesApi';
import '../Styles/mealDetailsScreen.css'

function MealScreenDetails({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await requestMealById(id)
      setRecipe(response.meals[0])
    }
    fetchData();
  }, [id])

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
  } = recipe;
  let videoKey = ''
  if (strYoutube) {
    videoKey = (strYoutube.replace('https://www.youtube.com/watch?v=', ''));
  }
  return (
    <div className="recipe-detail-container">
      <img src={ strMealThumb } alt={ strMeal } />
      <h1>{ strMeal }</h1>
      <h6>{ strCategory }</h6>
      <div className="suport-container">
        <IngredientList recipe={ recipe } />
      </div>
      <div className="suport-container">
        <h4>Instructions</h4>
        { strInstructions }
      </div>
      <div className="video-container">
        {(strYoutube) && (
          <iframe
            src={ `https://www.youtube.com/embed/${videoKey}` }
            title="YouTube video player"
            allowFullScreen
          />

        )}
      </div>
      <h4>Recommended</h4>
    </div>
  );
} 

export default MealScreenDetails;
