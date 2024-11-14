import React from 'react';
import './App.css';

class Contacto extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              Nunca compartiremos tu correo con nadie más.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsCheck"
            />
            <label className="form-check-label" htmlFor="termsCheck">
              Acepto los términos y condiciones
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Contacto;
