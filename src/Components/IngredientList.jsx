import React from 'react';

function IngredientList({ recipe }) {
  const recipeIngredient = [];
  function setRecipeIngredient() {
    const numberOfIngredinets = 20;
    let cont = 1;
    for (let index = 0; index <= numberOfIngredinets; index += 1) {
      if (recipe[`strIngredient${cont}`] !== ''
      && recipe[`strIngredient${cont}`] !== null) {
        recipeIngredient
          .push(
            `${recipe[`strIngredient${cont}`]} - ${recipe[`strMeasure${cont}`]}`,
          );
        cont += 1;
      } else {
        return null;
      }
    }
  }
  setRecipeIngredient();

  return (
    <div>
      <h4>Ingredinets</h4>
      <ul>
        {(recipeIngredient.length) && recipeIngredient.map((item, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            { item.replace(null, '') }
          </li>
        )) }
      </ul>
    </div>
  );
}

export default IngredientList;
