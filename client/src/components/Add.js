import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Add({ addItemFunction, setAddForm }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form onSubmit={ addItemFunction }>

            <Form.Group as={Row}>
              <Form.Label column xs={3} sm={2}>Description</Form.Label>
              <Col>
                <Form.Control type="text" placeholder="..." 
                  onChange={ (e) => setAddForm({ 'description': e.target.value }) } />
              </Col>

              <Col xs="auto">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
