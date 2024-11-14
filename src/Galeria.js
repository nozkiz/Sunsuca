import React from 'react';
import './App.css';

function Misimagenes() {
  // Usamos un array con las URLs de las imágenes del sector agropecuario
  const imagenes = [
    'https://auren.com/co/wp-content/uploads/2021/10/Sector-agropecuario-2-scaled.jpg',
    'https://www.codespa.org/app/uploads/agricultor-productor-arroz-republica-dominicana.jpg',
    'https://www.sur.org.co/wp-content/uploads/2024/08/Agro-colombiano.jpg'
  ];

  return (
    <>
      <div className="image-container">
        {/* Usamos map para iterar sobre las imágenes de forma dinámica */}
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index + 1} del sector agropecuario`}
            className="galeria-image"
          />
        ))}
      </div>
    </>
  );
}

class Galeria extends React.Component {
  render() {
    return (
      <div className="galeria-container">
        <h2 className="galeria-title text-center">Galería de Imágenes del Sector Agropecuario</h2>
        <p className="text-center">Explora nuestras imágenes y descubre más sobre el sector agropecuario.</p>
        <div className="galeria-images">
          <Misimagenes />
        </div>
      </div>
    );
  }
}

export default Galeria;