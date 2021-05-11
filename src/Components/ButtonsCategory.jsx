import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { 
  setDrinksCategories,
  setMealsCategories,
  setRecipies,
} from '../action';
import { 
  requestMealsCategories,
  requestDrinksCategories,
  requestMealsByCategory,
} from '../services/recipiesApi';
import ButtonCategory from './ButtonCategory';
import '../Styles/ButtonsCategory.css';

function ButtonsCategory({ 
  setMealsCategoriesState,
  setDrinksCategoriesState,
  mealsCategories,
  drinksCategories,
  pageType,
  setRecipies,
}) {

  async function setMealsCategoriesNames() {
    const categories = []
    const response = await requestMealsCategories();
    const result = response.categories;
    result.forEach((category, index) => (index < 5) && (
      categories.push(category.strCategory)
    ));
    setMealsCategoriesState(categories)
  }

  async function setDrinksCategories() {
    const categories = []
    const response = await requestDrinksCategories();
    const result = response.drinks;
    result.forEach((category, index) => (index < 5) && (
      categories.push(category.strCategory)
    ));
    setDrinksCategoriesState(categories);
  }

  useEffect(() => {
    setMealsCategoriesNames();
    setDrinksCategories();
  }, []);

  function handleMealsByCategory(array) {
    setRecipies(array);
  } 

  function handleButton(category) {
    switch (pageType) {
    case 'food':
      requestMealsByCategory(category)
        .then((response) => handleMealsByCategory(response.meals))
      break;
    default:
      return null;
    }
  }

  return (
    <div className="category-list-container">
      <Button
        className="all-button"
      >
        All
      </Button>
      {(mealsCategories && pageType === 'food') && (
        mealsCategories
          .map((category, i) => <ButtonCategory key={ i } title={ category } onclick={ handleButton } />)
      )}
      {(drinksCategories && pageType === 'drink') && (
        drinksCategories
          .map((category, i) => <ButtonCategory key={ i } title={ category } onclick={ handleButton } />)
      )}
    </div>
  );
}

const mapStateToProps = ({ categoryReducer, recipeReducer }) => ({
  mealsCategories: categoryReducer.mealsCategories,
  drinksCategories: categoryReducer.drinksCategories,
  pageType: recipeReducer.pageType,
})

const mapDispatchToProps = (dispatch) => ({
  setMealsCategoriesState: (categories) => dispatch(setMealsCategories(categories)),
  setDrinksCategoriesState: (categories) => dispatch(setDrinksCategories(categories)),
  setRecipies: (recipies) => dispatch(setRecipies(recipies))
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsCategory)
