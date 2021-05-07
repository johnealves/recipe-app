import {
  RECIPE_FECHING,
  SET_PAGETYPE,
  SET_RECIPIES,
} from "../action/actionTypes";

const INITIAL_STATE = {
  recipies: [],
  isFeching: false,
  pageType: 'comidas'
}

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PAGETYPE:
    return {
      ...state,
      pageType: action.pageType
    }
  case RECIPE_FECHING:
    return {
      ...state,
      isFeching: true
    }
  case SET_RECIPIES:
    return {
      ...state,
      isFeching: false,
      recipies: action.recipies,
    }
  default:
    return state
  }
}

export default recipeReducer;
