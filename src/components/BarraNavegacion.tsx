// Importamos React y los hooks necesarios
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BarraNavegacion.css';  // Archivo CSS personalizado para esta barra

const BarraNavegacion: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (busqueda.trim() !== '') {
      navigate(`/resultados?q=${encodeURIComponent(busqueda)}`);
      setBusqueda('');
    }
  };

  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container-fluid"> {/* Usamos container-fluid para mejor ancho en móvil */}
          <Link className="navbar-brand" to="/">📚 Cazador de Libros</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resultados?q=Programación">Resultados</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favoritos">Favoritos ❤️</Link>
              </li>
            </ul>

            {/* Formulario de búsqueda, oculto por defecto en pantallas pequeñas */}
            <form className="d-flex ms-lg-3 mt-2 mt-lg-0 w-100 w-lg-auto" onSubmit={manejarSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar libros..."
                aria-label="Search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className="hero mt-5 pt-5">
        <h1>Bienvenidos al Cazador de Libros</h1>
        <p>Encuentra los mejores libros para tu próxima lectura. ¡Comienza a explorar!</p>
      </div>
    </div>
  );
};

export default BarraNavegacion;






