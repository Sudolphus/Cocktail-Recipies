import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CocktailCard from './CocktailCard';

function NameSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktailList, setCocktailList] = useState([]);
  const [error, setError] = useState(null);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const cocktailName = event.target.name.value;
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);
      const jsonResponse = await response.json();
      const drinksResponse = await jsonResponse.drinks;
      drinksResponse.map(drink => {
        const newCocktailList = cocktailList;
        newCocktailList.push(drink);
        console.log(newCocktailList);
        return setCocktailList(newCocktailList);
      })
      setIsLoading(false);
    } catch(err) {
      setIsLoading(false);
      setError(err.message);
    }
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    //   .then(response => response.json())
    //   .then(jsonResponse => setCocktailList(jsonResponse.results.drinks))
    //   .then(setIsLoading(false))
    //   .catch((err) => {
    //     setIsLoading(false);
    //     setError(err);
    //   });
  }

  let display = null;
  if (isLoading) {
    display = <p>Loading...</p>
  } else if (error) {
    display = <p>{error}</p>
  } else if (cocktailList) {
    display = cocktailList.map(cocktail => <CocktailCard key={cocktail['idDrink']} cocktail={cocktail} className='cocktail-card'/>)
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