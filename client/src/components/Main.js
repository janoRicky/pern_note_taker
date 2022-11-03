import React from 'react';

import {
  Link
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import Add from '../components/Add';
import NoteItem from '../components/NoteItem';


export default function Main({ list, deleteItemFunction }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Add />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 200: 1, 600: 2, 950: 3, 1300: 4 }}>
            <Masonry>
              {list.map(item => (
                <NoteItem key={ item.todo_id } item={item} deleteItemFunction={deleteItemFunction} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>
    </Container>
  )
}

{/*<td>
  <Button as={Link} variant="info" className="mx-1" to={ '/view/' + item.todo_id }>View</Button>
  <Button as={Link} variant="warning" className="mx-1" to={ '/update/' + item.todo_id }>Update</Button>
  <Button variant="danger" className="mx-1" onClick={ () => deleteItemFunction(item.todo_id) }>Delete</Button>
</td>*/}
