import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" />
      <Route exact path="/bebidas"  />
      <Route exact path="/comidas/:id" />
      <Route exact path="/comidas/:id/in-progress" />
      <Route exact path="/bebidas/:id" reen />
      <Route exact path="/bebidas/:id/in-progress" />
      <Route exact path="/explorar" />
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
      <Route exact path="/perfil" />
      <Route exact path="/receitas-favoritas" />
      <Route exact path="/receitas-feitas" />
      {/* <Route component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
