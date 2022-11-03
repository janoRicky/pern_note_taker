import React from 'react'
import {
  useParams
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Update({ getItemFunction }) {
  const { id } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col className="bg-dark text-light">Update</Col>
      </Row>
    </Container>
  )
}
