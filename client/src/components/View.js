import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function View({ getItemFunction }) {
  const { id } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col>
          { id }
        </Col>
      </Row>
    </Container>
  )
}
