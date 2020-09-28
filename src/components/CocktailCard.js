import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function CocktailCard(props) {
  const { strDrink, strInstructions, strDrinkThumb } = props.cocktail;

  const getIngredients = () => {
    const ingredients = [];
    ingredients.push(props.cocktail["strIngredient1"]);
    ingredients.push(props.cocktail["strIngredient2"]);
    ingredients.push(props.cocktail["strIngredient3"]);
    ingredients.push(props.cocktail["strIngredient4"]);
    ingredients.push(props.cocktail["strIngredient5"]);
    ingredients.push(props.cocktail["strIngredient6"]);
    ingredients.push(props.cocktail["strIngredient7"]);
    ingredients.push(props.cocktail["strIngredient8"]);
    ingredients.push(props.cocktail["strIngredient9"]);
    ingredients.push(props.cocktail["strIngredient10"]);
    ingredients.push(props.cocktail["strIngredient11"]);
    ingredients.push(props.cocktail["strIngredient12"]);
    ingredients.push(props.cocktail["strIngredient13"]);
    ingredients.push(props.cocktail["strIngredient14"]);
    ingredients.push(props.cocktail["strIngredient15"]);
    return ingredients;
  }

  return (
    <Card>
      <Card.Img variant='bottom' src={strDrinkThumb} />
      <Card.Title as='h5'>{strDrink}</Card.Title>
      <Card.Body>
        <ul>
          {getIngredients().map((ingredient, index) => {
            return <li key={`ingredient${index}`}>{ingredient}, {props.cocktail[`strMeasure${index+1}`]}</li>
          })}
        </ul>
      </Card.Body>
      <Card.Footer>
        <Card.Text>{strInstructions}</Card.Text>
      </Card.Footer>
    </Card>
  )
}

CocktailCard.propTypes = {
  cocktail: PropTypes.object
}

export default CocktailCard;