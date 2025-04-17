// Importamos React y los hooks necesarios
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BarraNavegacion.css';  // Archivo CSS personalizado para esta barra

// Declaramos el componente funcional con TypeScript
const BarraNavegacion: React.FC = () => {
  // Estado local para almacenar lo que el usuario escribe en el input
  const [busqueda, setBusqueda] = useState('');
  // Hook para navegar entre páginas sin recargar
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita el comportamiento por defecto (recarga)
    if (busqueda.trim() !== '') { // Solo navega si hay algo escrito
      // Redirige a la ruta de resultados con el parámetro de búsqueda
      navigate(`/resultados?q=${encodeURIComponent(busqueda)}`);
      setBusqueda(''); // Limpia el campo después de buscar
    }
  };

  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          {/* Logo o marca, que redirige al inicio */}
          <Link className="navbar-brand" to="/">📚 Cazador de Libros</Link>

          {/* Botón para mostrar/ocultar el menú en móviles */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú colapsable */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Enlace al inicio */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>

              {/* Enlace directo a resultados con búsqueda predefinida */}
              <li className="nav-item">
                <Link className="nav-link" to="/resultados?q=Programación">Resultados</Link>
              </li>

              {/* Enlace a favoritos */}
              <li className="nav-item">
                <Link className="nav-link" to="/favoritos">Favoritos ❤️</Link>
              </li>
            </ul>

            {/* Formulario de búsqueda */}
            <form className="d-flex ms-3" onSubmit={manejarSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar libros..."
                aria-label="Search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)} // Actualiza el estado en cada tecla
              />
              <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Sección visual con mensaje de bienvenida */}
      <div className="hero">
        <h1>Bienvenidos al Cazador de Libros</h1>
        <p>Encuentra los mejores libros para tu próxima lectura. ¡Comienza a explorar!</p>
      </div>
    </div>
  );
};

export default BarraNavegacion;






