import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import CocktailDetails from './CocktailDetails';
import CocktailCard from './CocktailCard';
import reducer from './../reducers/drinks-reducer';
import * as a from './../actions/index';
import * as s from './SearchTypes';


function AlcoholSearch(props) {
  const { searchType } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [drink, setDrink] = useState(null);
  const [state, dispatch] = useReducer(reducer, { drinks: []});
  
  const endpointGenerator = (alcoholName) => {
    if (searchType === s.ALCOHOL) {
      return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcoholName}`;
    } else if (searchType === s.NAME) {
      return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${alcoholName}`;
    } else if (searchType === s.LETTER) {
      return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${alcoholName}`;
    }
  }

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(a.resetState());
    const alcoholName = event.target.name.value;
    try {
      const response = await fetch(endpointGenerator(alcoholName));
      const jsonResponse = await response.json();
      const alcoholResponse = jsonResponse.drinks;
      alcoholResponse.map(drink => dispatch(a.addDrink(drink)));
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
  } else if (drink) {
    display = <><CocktailDetails id={drink} />
    <Button type='button' variant='info' onClick={() => setDrink(null)}>Back To Full List</Button></>
  } else if (state.drinks.length > 0) {
    display = <><p>Number of Results: {state.drinks.length}</p>
    <CardColumns>
      {state.drinks.map(cocktail => <div key={cocktail['idDrink']} onClick={()=>setDrink(cocktail['idDrink'])}><CocktailCard cocktail={cocktail} cName={'cocktail-card'} /></div>)}
    </CardColumns></>
  }
  
  let searchHeader;
  if (searchType === s.ALCOHOL) {
    searchHeader = 'Search for cocktails made with a certain type of alcohol';
  } else if (searchType === s.NAME) {
    searchHeader = 'Search Cocktails by Name';
  } else if (searchType === s.LETTER) {
    searchHeader = 'Search Cocktails by First Letter';
  }

  return(
    <React.Fragment>
      <h1>{searchHeader}</h1>
      <Form onSubmit={onSubmitForm}>
        <Row>
          <Col xs={9}>
            <Form.Group controlId='name'>
              <Form.Control type='search' placeholder="Enter Search Term"/>
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Button type='submit' variant='info'>Search</Button>
          </Col>
        </Row>
      </Form>
      {display}
    </React.Fragment>
  )
}

AlcoholSearch.propTypes = {
  searchType: PropTypes.string
}

export default AlcoholSearch;