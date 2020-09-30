import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import SplashPage from './SplashPage';
import AlcoholSearch from './AlcoholSearch';
import RandomCocktail from './RandomCocktail';
import AccountControl from './Account/AccountControl';
import PasswordForgot from './Account/PasswordForgot';
import Profile from './Account/Profile';
import * as s from './SearchTypes';

function DrinkControl() {

  return(
    <Container fluid>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/name-search" exact>
            <AlcoholSearch searchType={s.NAME} />
          </Route>
          <Route path="/alcohol-search" exact>
            <AlcoholSearch searchType={s.ALCOHOL} />
          </Route>
          <Route path="/letter-search" exact>
            <AlcoholSearch searchType={s.LETTER} />
          </Route>
          <Route path="/random-cocktail" exact>
            <RandomCocktail />
          </Route>
          <Route path="/account" exact>
            <AccountControl />
          </Route>
          <Route path='/forgot-password' exact>
            <PasswordForgot />
          </Route>
          <Route path='/profile' exact>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default DrinkControl;