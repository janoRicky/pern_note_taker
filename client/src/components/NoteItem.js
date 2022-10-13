import React, { useState, useEffect } from 'react';

import {
  Link
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function NoteItem({ item, deleteItemFunction }) {

  const [updateDesc, setUpdateDesc] = useState(false);
  const [updateForm, setUpdateForm] = useState({
    todo_id: '',
    description: ''
  });

  const toggleUpdateDesc = () => {
    setUpdateDesc(!updateDesc);
  };
  const editNote = () => {
    toggleUpdateDesc();
  };

  const updateItemFunction = async () => {
    if (updateForm.todo_id != '') {
      try {
        const body = {
          description: updateForm.description
        };
        const response = await fetch('http://localhost:8080/todos/' + updateForm.todo_id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  useEffect(() => {
    if (!updateDesc) {
      updateItemFunction();
    }
  }, [updateDesc]);

  return (
    <div className="p-3">
      <Container fluid className="p-4 bg-warning rounded-4">
        <Row>
          <Col>
            <h5 className="fw-bold">{ item.todo_id }</h5>
          </Col>
          <Col className="text-end" xs={ 'auto' }>
            <Link className="note-close rounded-circle fw-bold text-decoration-none" as={Button} 
              onClick={ () => deleteItemFunction(item.todo_id) }>
              X
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            { updateDesc ? (
                <Form>
                  <Form.Group as={Row}>
                    <Col>
                      <Form.Control as="textarea" rows={6} placeholder="..." maxLength={255} autoFocus 
                        defaultValue={ item.description } 
                        onChange={ (e) => setUpdateForm({ 'todo_id': item.todo_id, 'description': e.target.value }) }
                        onBlur={ toggleUpdateDesc } />
                    </Col>
                  </Form.Group>
                </Form>
              ) : (
                <div className="note-desc px-3 py-2" style={{ whiteSpace: 'pre-wrap' }} onClick={ editNote }>
                  { item.description }
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}
