import React, { useEffect, useState } from 'react';
import IngredientList from '../Components/IngredientList';
import { requestDrinkById } from '../services/recipiesApi';
import '../Styles/recipeDetailsScreen.css'

function DrinkScreenDetails({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await requestDrinkById(id)
      setRecipe(response.drinks[0])
    }
    fetchData();
  }, [id])

  const {
    strDrinkThumb,
    strDrink,
    // strCategory,
    strAlcoholic,
    strInstructions,
  } = recipe;
  return (
    <div className="recipe-detail-container">
      <img src={ strDrinkThumb } alt={ strDrink } />
      <h1>{ strDrink }</h1>
      <h6>{ strAlcoholic }</h6>
      <div className="suport-container">
        <IngredientList recipe={ recipe } />
      </div>
      <div className="suport-container">
        <h4>Instructions</h4>
        { strInstructions }
      </div>
      {/* <h4>Recommended</h4> */}
    </div>
  );
} 

export default DrinkScreenDetails;
