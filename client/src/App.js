
import './App.css';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from './components/Navigation';
import Main from './components/Main';
import View from './components/View';
import Update from './components/Update';


function App() {
  const [list, setList] = useState([]);

  document.title = 'PERN Notepad';

  useEffect(() => {
    getListFunction();
  }, [list]);


  const getListFunction = async (e) => {
    try {
      const response = await fetch('http://localhost:8080/todos');
      const jsonData = await response.json();

      setList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getItemFunction = async (item_id) => {
    try {
      const response = await fetch('http://localhost:8080/todos/' + item_id);
      const jsonData = await response.json();
// console.log(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteItemFunction = async (item_id) => {
    try {
      const response = await fetch('http://localhost:8080/todos/' + item_id, {
        method: 'DELETE'
      });
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index 
              element={<Main list={ list } 
              deleteItemFunction={ deleteItemFunction } />} />
            <Route path="/view/:id" element={<View getItemFunction={ getItemFunction } />} />
            <Route path="/update/:id" element={<Update getItemFunction={ getItemFunction } />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
