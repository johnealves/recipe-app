import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setDrinksRecipies, setPageType } from '../action';
import ButtonsCategory from '../Components/ButtonsCategory';
import CardRecipe from '../Components/CardRecipe';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Styles/mealsScreen.css';

function DrinksScreen({ setPageType, recipies, setDrinksRecipies }) {
  useEffect(() => {
    setPageType('drink');
    setDrinksRecipies();
  }, [setPageType, setDrinksRecipies])
  if (recipies.length === 1) return <Redirect to={ `/drink/${ recipies[0].idDrink }` } />;
  return (
    <div>
      <Header title="Drinks" />
      <ButtonsCategory />
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
  setDrinksRecipies: () => dispatch(setDrinksRecipies()),
})


export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);
