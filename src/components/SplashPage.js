import React from 'react';
import Card from 'react-bootstrap/Card';
import cocktail from './img/cocktails.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

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
            <div className="about-cocktails">
              <h3>About Cocktails</h3>
              <Row>
                <Col>
                  <h5>Meet new and interesting cocktails!</h5>
                </Col>
                <Col>
                  <h5>So easy to use!</h5>
                </Col>
                <Col>
                  <h5>We have all the greatest cocktails!</h5>
                </Col>
              </Row>
            </div>
            <div className="testimonials">
              <h3>Everybody loves cocktails!</h3>
              <Carousel indicators={false} controls={false} fade={true} keyboard={false}>
                <Carousel.Item interval={1000}>
                  <p><strong>I love drinking!</strong></p>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <p><strong>It numbs the pain!</strong></p>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <p><strong>For thirty seconds, I don't feel like dying!</strong></p>
                </Carousel.Item>
              </Carousel>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="copyright-footer">
              <h4>© Copyright 2020 Micheal Hansen, Ben Russell</h4>
            </div>
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    </React.Fragment>
  )
}

export default SplashPage;