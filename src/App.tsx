import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import './App.css'

function App() {

  (function changeStyle() {

    let body = Array.from(document.getElementsByTagName("body") as HTMLCollectionOf<HTMLElement>)

    body.forEach(body =>
      body.style.backgroundImage = "linear-gradient(to right top, #051937, #004d7a)"
    )

  })();

  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  )

}

export default App
