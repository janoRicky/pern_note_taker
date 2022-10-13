import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Add({  }) {

  const [addForm, setAddForm] = useState({
    description: ''
  });
  const addItemFunction = async (e) => {
    e.preventDefault();
    try {
      const body = {
        description: addForm.description
      };
      const response = await fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      // setAddForm({ 'description': null });
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xl={8} className="p-2">
          <Form onSubmit={ addItemFunction } className="bg-warning p-4 rounded-4">

            <Form.Group className="align-items-center" as={Row}>
              <Form.Label className="fw-bold" column xs={'auto'}>Add Note:</Form.Label>
              <Col>
                <Form.Control as="textarea" rows={3} placeholder="..." 
                  onChange={ (e) => setAddForm({ 'description': e.target.value }) }
                  maxLength={255} />
              </Col>

              <Col xs="auto">
                <Button className="fw-bold" size="lg" variant="primary" type="submit">
                  SUBMIT
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
