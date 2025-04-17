
// Importamos React y el archivo de estilos
import React from 'react';
import './Inicio.css';

// Importamos la imagen de fondo desde la carpeta 'assets'
import fondoLibreria from '../assets/library.jpg';

// Declaramos el componente funcional 'Inicio'
const Inicio: React.FC = () => {
  return (
    // Creamos un contenedor principal con clase 'inicio'
    // y le aplicamos el fondo dinámicamente usando 'style'
    <div
      className="inicio"
      style={{ backgroundImage: `url(${fondoLibreria})` }}
    >
      {/* Contenedor del contenido que va encima del fondo */}
      <div className="contenido">
        <h1>
          ¡Bienvenido al universo literario!
          <span className="app-nombre"></span> {/* Aquí podrías poner el nombre de la app */}
        </h1>

        <p>
          Aquí encontrarás desde clásicos atemporales hasta los últimos bestsellers.
          ¿Listo para encontrar tu próximo libro?
        </p>
      </div>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otras partes
export default Inicio;


