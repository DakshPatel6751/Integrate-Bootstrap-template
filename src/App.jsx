import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


// or less ideally
// import { Button } from 'react-bootstrap';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      {/* Header */}
      <Row className="bg-dark text-white p-3">
        <Col>
          <h1>Header</h1>
        </Col>
      </Row>

      <Row>
        {/* Sidebar */}
        {/* <Col xs={3} className="bg-secondary p-3">
          <h4>Sidebar</h4>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </Col> */}

        {/* Main Content Area */}
        <Col xs={6} className="p-3" style={{background:"lightblue"}}>
          {/* Main Content Top */}
          {/* <Card className="mb-3">
            <Card.Body>Main Content Area</Card.Body>
          </Card> */}

          {/* Grid of Items */}
          <Row>
            {Array.from({ length: 9}).map((_, index) => (
              <Col xs={4} className="mt-2" key={index}>
                <Card>
                  <Card.Body>{index + 1}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right Panel */}
        <Col xs={6} className="bg-light p-3" >
          <Card className="mb-3"style={{background:"lightblue",height:"200px"}}>
            <Card.Body></Card.Body>
          </Card>
         
          <Card className="mt-3" style={{background:"lightblue"}}>
            <Card.Body ></Card.Body>
          </Card>
          <Card  className="mt-3" style={{background:"lightblue",paddingTop:"40x"}}>
            <Card.Body ></Card.Body>
          </Card>
        </Col>
      
          {/* Main Content Top */}
        <Card className="mt-3" style={{width:"100%",backgroundColor:"lightblue"}}>
            <Card.Body>Main Content Area</Card.Body>
          </Card>
      </Row>
    </Container>
  );
}

export default App;