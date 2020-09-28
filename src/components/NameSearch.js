import React, { useState, useReducer } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import CocktailCard from './CocktailCard';
import reducer from './../reducers/drinks-reducer';
import * as a from './../actions/index';

const initialState = { drinks: [] };

function NameSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(a.resetState());
    const cocktailName = event.target.name.value;
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);
      const jsonResponse = await response.json();
      const drinksResponse = await jsonResponse.drinks;
      drinksResponse.map(drink => dispatch(a.addDrink(drink)));
    } catch(err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  let display = null;
  if (isLoading) {
    display = <p>Loading...</p>
  } else if (error) {
    display = <p>{error}</p>
  } else if (state.drinks.length > 0) {
    display = <><p>Number of Results: {state.drinks.length}</p>
      <CardColumns>
        {state.drinks.map(cocktail => <CocktailCard key={cocktail['idDrink']} cocktail={cocktail} className='cocktail-card'/>)}
      </CardColumns></>
  }

  return (
    <React.Fragment>
      <Form onSubmit={onSubmitForm}>
        <h2>Search Cocktails by Name</h2>
        <Row>
          <Col xs={9}>
            <Form.Group controlId="name">
              <Form.Control type='search' placeholder='Cocktail Name' />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Button block variant='info' type='submit'>Search!</Button>
          </Col>
        </Row>
      </Form>
      {display}
    </React.Fragment>
  )
}

export default NameSearch;