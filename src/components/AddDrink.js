import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from './Firebase';
import withAuthorization from './Session/withAuthorization';
import { compose } from 'recompose';
import Button from 'react-bootstrap/Button';

function AddDrink(props) {
  const { db } = props.firebase;
  const { drink } = props;

  const [user, setUser] = useState(null);

  useEffect(() => props.firebase.auth.onAuthStateChanged(function(user){
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }), [props.firebase.auth]);

  
  const addDrink = () => {
    db.collection(user.email).doc(drink.idDrink).set({
      idDrink: drink.idDrink,
      strDrink: drink.strDrink,
      strInstructions: drink.strInstructions,
      strDrinkThumb: drink.strDrinkThumb,
      strDrinkIngredient1: drink.strIngredient1,
      strDrinkIngredient2: drink.strIngredient2,
      strDrinkIngredient3: drink.strIngredient3,
      strDrinkIngredient4: drink.strIngredient4,
      strDrinkIngredient5: drink.strIngredient5,
      strDrinkIngredient6: drink.strIngredient6,
      strDrinkIngredient7: drink.strIngredient7,
      strDrinkIngredient8: drink.strIngredient8,
      strDrinkIngredient9: drink.strIngredient9,
      strDrinkIngredient10: drink.strIngredient10,
      strDrinkIngredient11: drink.strIngredient11,
      strDrinkIngredient12: drink.strIngredient12,
      strDrinkIngredient13: drink.strIngredient13,
      strDrinkIngredient14: drink.strIngredient14,
      strDrinkIngredient15: drink.strIngredient15,
      strDrinkMeasure1: drink.strMeasure1,
      strDrinkMeasure2: drink.strMeasure2,
      strDrinkMeasure3: drink.strMeasure3,
      strDrinkMeasure4: drink.strMeasure4,
      strDrinkMeasure5: drink.strMeasure5,
      strDrinkMeasure6: drink.strMeasure6,
      strDrinkMeasure7: drink.strMeasure7,
      strDrinkMeasure8: drink.strMeasure8,
      strDrinkMeasure9: drink.strMeasure9,
      strDrinkMeasure10: drink.strMeasure10,
      strDrinkMeasure11: drink.strMeasure11,
      strDrinkMeasure12: drink.strMeasure12,
      strDrinkMeasure13: drink.strMeasure13,
      strDrinkMeasure14: drink.strMeasure14,
      strDrinkMeasure15: drink.strMeasure15,
    })
    .then(() => console.log("Success!"))
    .catch(error => console.log(error.message));
  }

  return (
    <Button variant='primary' type='button' onClick={addDrink}>Favorite</Button>
  )
}

AddDrink.propTypes = {
  drink: PropTypes.object
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(AddDrink);