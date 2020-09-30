import React, { useState, useEffect, useReducer } from 'react';
import { withFirebase } from './Firebase';
import withAuthorization from './Session/withAuthorization';
import { compose } from 'recompose';
import CardColumns from 'react-bootstrap/CardColumns';
import CocktailCard from './CocktailCard';

const reducer = (state, action) => {
  switch(action.type) {
    case 'add_drink':
      const newDrinks = [...state.drinks, action.drink];
      return {...state, drinks: newDrinks};
    default:
      return state;
  }
}

function ViewFavorites(props) {
  const [user, setUser] = useState(null);
  const [state, dispatch] = useReducer(reducer, { drinks: []});
  
  useEffect(() => props.firebase.auth.onAuthStateChanged(function(user){
    if(user){
      setUser(user);
    } else {
      setUser(null);
    }
  }), [props.firebase.auth]);

  useEffect(() => {
    if (user) {
      props.firebase.db.collection(user.email).get()
      .then(querySnapshot => {
        const favorites = querySnapshot.docs.map(doc => doc.data());
        favorites.map(drink => dispatch({ type: 'add_drink', drink}));
      });
    }
  }, [user, props.firebase.db])

  // const getFavorites = () => {
  //   props.firebase.db.collection(user.email).get()
  //     .then(querySnapshot => {
  //       const favorites = querySnapshot.docs.map(doc => doc.data());
  //       favorites.map(drink => dispatch({ type: 'add_drink', drink}));
  //     });
  // }

  return(
    <React.Fragment>
      <h1>Your Favorite Cocktails!</h1>
      <CardColumns>
        {state.drinks.map(favorites => <CocktailCard key={favorites.idDrink} cocktail={favorites} cName='cocktail-card' />)}
      </CardColumns>
    </React.Fragment>
  )
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(ViewFavorites);
