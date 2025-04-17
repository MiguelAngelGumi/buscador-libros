import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buscarLibros } from '../Services/ServiciosLibros';
import TarjetaLibro from '../components/TarjetaLibro';
import { FaFeatherAlt } from 'react-icons/fa';
import 'animate.css';

const Resultados: React.FC = () => {
  const location = useLocation();
  const parametros = new URLSearchParams(location.search);
  const termino = parametros.get('q') || '';

  // Estado para los libros, el índice de inicio y la carga
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [libros, setLibros] = useState<any[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Función para cargar los libros
  const cargarLibros = async (nuevoStartIndex = 0) => {
    setLoading(true);
    try {
      const nuevosLibros = await buscarLibros(termino, nuevoStartIndex);
      if (nuevoStartIndex === 0) {
        setLibros(nuevosLibros);
      } else {
        setLibros((prev) => [...prev, ...nuevosLibros]);
      }
    } catch (error) {
      console.error('Error al buscar libros:', error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar los libros cada vez que cambia el término de búsqueda
  useEffect(() => {
    setStartIndex(0); // Restablecer el índice de inicio
    cargarLibros(0); // Cargar los primeros resultados
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termino]);

  // Función para ver más resultados
  const verMas = () => {
    const nuevoIndice = startIndex + 9;
    setStartIndex(nuevoIndice);
    cargarLibros(nuevoIndice);
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-3 animate__animated animate__fadeInDown d-flex align-items-center">
        <FaFeatherAlt className="me-2 text-secondary" size={24} />
        Resultados de la búsqueda para: <span className="text-primary fw-bold ms-2">"{termino}"</span>
      </h2>

      <p className="text-muted mb-4 animate__animated animate__fadeIn">
        Aquí tienes los libros relacionados con tu búsqueda 📚
      </p>

      {loading && <p>Cargando libros...</p>}

      <div className="row">
        {libros.length > 0 ? (
          libros.map((libro) => (
            <div className="col" key={libro.id}>
              <TarjetaLibro libro={libro} />
            </div>
          ))
        ) : !loading ? (
          <p>No se encontraron resultados.</p>
        ) : null}
      </div>

      {libros.length > 0 && (
        <div className="text-center my-4">
          <button className="btn btn-outline-primary" onClick={verMas}>
            🔄 Ver más resultados
          </button>
        </div>
      )}
    </div>
  );
};

export default Resultados;


