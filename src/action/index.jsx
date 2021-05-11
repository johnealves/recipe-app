import { 
  RECIPE_FECHING,
  SET_DRINKS_CATEGORIES,
  SET_MEALS_CATEGORIES,
  SET_PAGETYPE,
  SET_RECIPIES,
} from "./actionTypes";
import * as api from '../services/recipiesApi';

export const setPageType = (pageType) => ({
  type: SET_PAGETYPE,
  pageType,
})

const recipeFeching = () => ({
  type: RECIPE_FECHING,
})

export const setRecipies = (recipies) => {
  if (recipies === null) {
    alert('no recipes found');
  } else {
    return {
      type: SET_RECIPIES,
      recipies,
    }
  }
}

export const setMealsRecipies = () => {
  return (dispatch) => {
    dispatch(recipeFeching())
    return api.searchMealsRecipe()
      .then((response) => dispatch(setRecipies(response.meals)))
      .catch((error) => console.log(error));
  }
}

export const setDrinksRecipies = () => {
  return (dispatch) => {
    dispatch(recipeFeching())
    return api.searchDrinksRecipe()
      .then((response) => dispatch(setRecipies(response.drinks)))
      .catch((error) => console.log(error));
  }
}

export const searchRecipiesApi = (radio, value) => {
  return (dispatch) => {
    dispatch(recipeFeching())
    return api.searchByFilter(radio, value)
      .then((response) => dispatch(setRecipies(response.meals)))
      .catch((error) => console.log(error))
  }
}

export const searchDrinksApi = (radio, value) => {
  return (dispatch) => {
    dispatch(recipeFeching())
    return api.searchDrinksByFilter(radio, value)
      .then((response) => dispatch(setRecipies(response.drinks)))
      .catch((error) => console.log(error));
  }
}

export const setMealsCategories = (categories) => ({
  type: SET_MEALS_CATEGORIES,
  categories,
})

export const setDrinksCategories = (categories) => ({
  type: SET_DRINKS_CATEGORIES,
  categories,
})