import React from 'react';
import './App.css';

class SlideCarousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://regioncaribe.com.co/wp-content/uploads/2020/07/Aprobado-Plan-Departamental-de-Extensi%C3%B3n-Agropecuaria-PDEA-Cesar-00.jpg"
              className="d-block w-100 carousel-image"
              alt="Paisaje escénico"
            />
            <div className="carousel-caption">
              <h3>Explora la Belleza de la Naturaleza</h3>
              <p>Sumérgete en paisajes impresionantes y experiencias únicas.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://www.antioquiacritica.com/wp-content/uploads/2021/07/sector-agropecuario.jpg"
              className="d-block w-100 carousel-image"
              alt="Paisaje agrícola"
            />
            <div className="carousel-caption">
              <h3>Vistas Majestuosas de Montañas</h3>
              <p>Siente la serenidad de las cumbres más altas y vistas impresionantes.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://concepto.de/wp-content/uploads/2021/11/sector-agropecuario-e1635906339741.jpg"
              className="d-block w-100 carousel-image"
              alt="Paisaje costero"
            />
            <div className="carousel-caption">
              <h3>Relájate en Playas Prístinas</h3>
              <p>Desconéctate en playas de arena con aguas cristalinas.</p>
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    );
  }
}

export default SlideCarousel;
