import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import MealsScreen from './Pages/mealsScreen';
import ProfileScreen from './Pages/ProfileScreen';
import DrinksScreen from './Pages/drinksScreen';
import ExploreScreen from './Pages/exploreScreen';
import MealScreenDetails from './Pages/MealScreenDetails';
import DrinkScreenDerails from './Pages/DrinkScreenDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ MealsScreen } />
      <Route exact path="/drinks" component={ DrinksScreen } />
      <Route exact path="/food/:id" component={ MealScreenDetails } />
      <Route exact path="/food/:id/in-progress" />
      <Route exact path="/drink/:id" component={ DrinkScreenDerails } />
      <Route exact path="/drink/:id/in-progress" />
      <Route exact path="/explorar" component={ ExploreScreen } />
      <Route exact path="/explorar/:pageType" />
      <Route
        exact
        path="/explorar/:pageType/ingredientes"
      />
      <Route
        exact
        path="/explorar/comidas/area"
      />
      <Route
        exact
        path="/explorar/bebidas/area"
      />
      <Route exact path="/profile" component={ ProfileScreen } />
      <Route exact path="/receitas-favoritas" />
      <Route exact path="/receitas-feitas" />
      {/* <Route component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
