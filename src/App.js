import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './Menu.js';
import logo from './IMG/logo.png'; // Importa la imagen

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo} // Usa la imagen importada
          className="App-logo"
          alt="Logo SUNSUCA"
        />
        <h1 className="App-title">Bienvenido a SUNSUCA</h1>
      </header>
      <nav>
        <Menu />
      </nav>
      {/* Aquí podrían ir otras secciones como el contenido principal */}
    </div>
  );
}

export default App;
