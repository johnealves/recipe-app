import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../Styles/exploreScreen.css';

function ExploreScreen() {
  return (
    <div className="explore-main-container">
      <Header title="Explorar" />
      <section>
        <Link to="/explorar/comidas">
          <Button
            variant="info"
            type="button"
            data-testid="explore-food"
          >
            Explorar Comidas
          </Button>
        </Link>
        <Link to="/explorar/bebidas">
          <Button
            variant="info"
            type="button"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </Button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default ExploreScreen;