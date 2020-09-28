import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';

function RandomCocktail() {
  const [drink, setDrink] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRandomCocktail() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const jsonResponse = await response.json();
        setDrink(jsonResponse.drinks[0]);
      } catch(err) {
        setError(err.message);
      } 
    }
    getRandomCocktail();
  }, [])
  
  let display;
    if (error) {
      display = <p>{error}</p>
    } else if (drink) {
      display = <CocktailCard cocktail={drink} className='big-cocktail-card' />
    } else {
      display = <p>Loading...</p>
    }
  
    return(
      <React.Fragment>
        {display}
      </React.Fragment>
    )
}


export default RandomCocktail;