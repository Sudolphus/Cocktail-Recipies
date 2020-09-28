import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CocktailCard from './CocktailCard';

function CocktailDetails(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    async function getCocktail() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const jsonResponse = await response.json();
        setDrink(jsonResponse.drinks[0]);
      } catch(err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCocktail();
  }, [id])

  // useEffect(() => getCocktail(), [getCocktail]);

  let display;
  if (isLoading) {
    display = <p>Loading...</p>
  } else if (error) {
    display = <p>{error}</p>
  } else if (drink) {
    display = <CocktailCard cocktail={drink} className='big-cocktail-card' />
  }

  return (
    <React.Fragment>
      {display}
    </React.Fragment>
  )
}

CocktailDetails.propTypes = {
  id: PropTypes.string
}

export default CocktailDetails;