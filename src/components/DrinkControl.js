import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import * as d from './DisplayTypes';
import SplashPage from './SplashPage';

function DrinkControl() {
  const [page, setPage] = useState(d.SPLASH_PAGE);

  let pageToDisplay;
  if (page === d.SPLASH_PAGE) {
    pageToDisplay = <SplashPage />
  }

  return(
    <Container fluid>
      {pageToDisplay}
    </Container>
  )
}

export default DrinkControl;