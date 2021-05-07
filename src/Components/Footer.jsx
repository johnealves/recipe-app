import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../Styles/footer.css';

function Footer() {
  return (
    <Card className="footer-card">
      <Card.Footer className="footer-menu" data-testid="footer">
      {/* <footer className="footer-menu" data-testid="footer"> */}
        <Link to="/drinks">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="Botão para a tela de drinks"
          />
        </Link>
        <Link to="/explorar">
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="Botão para a tela de explorar"
          />
        </Link>
        <Link to="/foods">
          <img
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="Botão para a tela de comidas"
          />
        </Link>
      {/* </footer> */}

      </Card.Footer>
    </Card>
  );
}

export default Footer;