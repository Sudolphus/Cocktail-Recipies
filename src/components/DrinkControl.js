import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import SplashPage from './SplashPage';
import NameSearch from './NameSearch';
import AlcoholSearch from './AlcoholSearch';

function DrinkControl() {
  return(
    <Container fluid>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/name-search" exact>
            <NameSearch />
          </Route>
          <Route path="/alcohol-search" exact>
            <AlcoholSearch />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default DrinkControl;