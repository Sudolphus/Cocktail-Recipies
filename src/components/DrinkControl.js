import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import SplashPage from './SplashPage';
import NameSearch from './NameSearch';

function DrinkControl() {
  return(
    <Container fluid>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/">
            <SplashPage />
          </Route>
          <Route path="/name-search">
            <NameSearch />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default DrinkControl;