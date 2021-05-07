import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setPageType } from '../action';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function DrinksScreen({ setPageType, recipies }) {
  useEffect(() => {
    setPageType('drink')
  }, [setPageType])
  if (recipies.length === 1) return <Redirect to={ `/drinks/${ recipies[0].idMeal }` } />;
  return (
    <div>
      <Header title="Drinks" />
      <Footer />
    </div>
  )
}

const mapStateToProps = ({ recipeReducer }) => ({
  recipies: recipeReducer.recipies,
})

const mapDispatchToProps = (dispatch) => ({
  setPageType: (pageType) => dispatch(setPageType(pageType))
})


export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);
