import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Container fluid>

        <Routes>
          <Route path='/' element={ <Home /> } />  
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
