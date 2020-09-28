import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function NameSearch() {
  return (
    <React.Fragment>
      <Form>
        <h2>Search Cocktails by Name</h2>
        <Row>
          <Col xs={9}>
            <Form.Group controlId="cocktail-name">
              <Form.Control type='search' placeholder='Cocktail Name' />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Button block variant='info' type='submit'>Search!</Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  )
}

export default NameSearch;