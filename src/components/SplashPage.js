import React from 'react';
import Card from 'react-bootstrap/Card';
import cocktail from './img/cocktails.jpeg';

function SplashPage() {
  return(
    <React.Fragment>
      <div className="header">
        <h1>Welcome to The Drink List</h1>
      </div>
      <Card>
        <Card.Img src={cocktail} alt="Some Cocktails" />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Text className="about-cocktails">
              <h3>About Cocktails</h3>
            </Card.Text>
            <Card.Text className="testimonials">
              <h3>Everybody loves cocktails!</h3>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Text className="copyright-footer">
              <h4>Copyright details</h4>
            </Card.Text>
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    </React.Fragment>
  )
}

export default SplashPage;