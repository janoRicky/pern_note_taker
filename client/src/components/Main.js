import React from 'react'
import {
  Link
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Add from '../components/Add';


export default function Main({ list, addItemFunction, setAddForm, deleteItemFunction }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Add addItemFunction={ addItemFunction } setAddForm={ setAddForm } />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map(item => (
                <tr key={ item.todo_id }>
                  <td>
                    { item.todo_id }
                  </td>
                  <td>
                    { item.description }
                  </td>
                  <td>
                    <Button as={Link} variant="info" className="mx-1" to={ '/view/' + item.todo_id }>View</Button>
                    <Button as={Link} variant="warning" className="mx-1" to={ '/update/' + item.todo_id }>Update</Button>
                    <Button variant="danger" className="mx-1" onClick={ () => deleteItemFunction(item.todo_id) }>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
