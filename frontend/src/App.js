import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container fluid>

      <Router>
        <Route path='/signup' component={Signup} />
        <Route exact path='/' component={Home} />
      </Router>
    </Container>
  );
}

export default App;
