import { 
  SET_DRINKS_CATEGORIES,
  SET_MEALS_CATEGORIES
} from "../action/actionTypes";

const INITIAL_STATE = {
  mealsCategories: [],
  drinksCategories: [],
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_MEALS_CATEGORIES:
    return {
      ...state,
      mealsCategories: action.categories,
    }
    case SET_DRINKS_CATEGORIES:
      return {
        ...state,
        drinksCategories: action.categories,
      }
  default:
    return state
  }
}

export default categoryReducer;
