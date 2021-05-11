import { combineReducers } from "redux";
import recipeReducer from './recipeReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  recipeReducer,
  categoryReducer,
})

export default rootReducer;
