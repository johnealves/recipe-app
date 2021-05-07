import { 
  RECIPE_FECHING,
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

const setRecipies = (recipies) => ({
  type: SET_RECIPIES,
  recipies,
})

export const searchRecipiesApi = (radio, value) => {
  return (dispatch) => {
    dispatch(recipeFeching())
    return api.searchByFilter(radio, value)
      .then((response) => dispatch(setRecipies(response.meals)))
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