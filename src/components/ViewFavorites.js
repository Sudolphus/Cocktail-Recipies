import React, { useState, useEffect, useReducer } from 'react';
import { withFirebase } from './Firebase';
import withAuthorization from './Session/withAuthorization';
import { compose } from 'recompose';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import CocktailCard from './CocktailCard';

const reducer = (state, action) => {
  switch(action.type) {
    case 'add_drink':
      const newDrinks = [...state.drinks, action.drink];
      return {...state, drinks: newDrinks};
    case 'delete_drink':
      const deleteDrinks = state.drinks.filter(drink => drink.idDrink !== action.id);
      return {...state, drinks: deleteDrinks};
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

  const deleteDrink = (id) => {
    props.firebase.db.collection(user.email).doc(id).delete()
      .then(dispatch({type: 'delete_drink', id }))
  }

  return(
    <React.Fragment>
      <h1>Your Favorite Cocktails!</h1>
      <CardColumns>
        {state.drinks.map((favorites, ind) =>
          <div key={ind}>
            <CocktailCard key={favorites.idDrink} cocktail={favorites} cName='cocktail-card' />
            <Button type='button' variant="danger" onClick={() => deleteDrink(favorites.idDrink)} key={`button${favorites.idDrink}`}>Remove From Favorites</Button>
          </div>
        )}
      </CardColumns>
    </React.Fragment>
  )
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(ViewFavorites);
