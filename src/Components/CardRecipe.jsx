import React from 'react';
import { number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import '../Styles/cardRecipies.css';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

function CardRecipe({ recipe, index, pageType }) {
  return (
    <div>
      { (pageType === 'food' && recipe.strMeal) && (
        <Link to={ { pathname: `/foods/${recipe.idMeal}` } }>
          <Card className="card-recipe-container">
            <Card.Img
              variant="top"
              src={ recipe.strMealThumb }
              alt={ `imagen de ${recipe.strMeal}` }
              data-testid={ `${index}-card-img` }
            />
            <Card.Body>
              <Card.Title>{ recipe.strMeal }</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      ) }
      {(pageType === 'drink' && recipe.strDrink) && (
        <Link to={ { pathname: `/bebidas/${recipe.idDrink}`, pageType: 'bebidas' } }>
          <Card className="card-recipe-container">
            <Card.Img
              variant="top"
              src={ recipe.strDrinkThumb }
              alt={ `imagen de ${recipe.strDrink}` }
              data-testid={ `${index}-card-img` }
            />
            <Card.Body>
              <Card.Title>{ recipe.strDrink }</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      )}
    </div>
  );
}

const mapStateToProps = ({ recipeReducer }) => ({
  pageType: recipeReducer.pageType,
})

CardRecipe.propTypes = {
  recipe: shape().isRequired,
  index: number.isRequired,
};

export default connect(mapStateToProps)(CardRecipe);