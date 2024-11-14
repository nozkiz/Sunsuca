// index.js o App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Aquí importamos el archivo CSS

import Slide from './Slide';
import Galeria from './Galeria'; // Componente importado
import Contacto from './Contacto';

export default function Menu() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">SUNSUCA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/galeria">Galería</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/galeria" component={GaleriaPage} />
          <Route path="/contacto" component={ContactoPage} />
        </Switch>
      </div>
    </Router>
  );
}

function Inicio() {
  return (
    <div>
      <Slide />
    </div>
  );
}

function GaleriaPage() {
  return (
    <div>
      <h2 className="display-3 my-5"></h2>
      <Galeria /> {/* Aquí se renderiza el componente Galeria importado */}
    </div>
  );
}

function ContactoPage() {
  return (
    <div>
      <h2 className="display-3 my-5"></h2>
      <Contacto /> {/* Aquí se renderiza el componente Contacto importado */}
    </div>
  );
}
