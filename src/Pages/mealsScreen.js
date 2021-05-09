import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setMealsRecipies, setPageType } from '../action';
import CardRecipe from '../Components/CardRecipe';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Styles/mealsScreen.css';

function MealsScreen({ setPageType, recipies, setMealsRecipies }) {
  useEffect(() => {
    setPageType('food');
    setMealsRecipies();
  }, [setPageType, setMealsRecipies]);
  if (recipies.length === 1) return <Redirect to={ `/foods/${ recipies[0].idMeal }` } />;
  return (
    <div>
      <Header title="Foods" />
      <div className="card-recipies-list">
        { recipies
          .map((recipe, index) => <CardRecipe recipe={ recipe } index={ index } key={ index } />)}
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = ({ recipeReducer }) => ({
  recipies: recipeReducer.recipies,
})

const mapDispatchToProps = (dispatch) => ({
  setPageType: (pageType) => dispatch(setPageType(pageType)),
  setMealsRecipies: () => dispatch(setMealsRecipies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MealsScreen);
