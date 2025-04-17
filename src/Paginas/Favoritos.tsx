import React, { useState, useEffect } from 'react';
import TarjetaLibro from '../components/TarjetaLibro';

const Favoritos: React.FC = () => {
  // Estado que almacena los libros favoritos
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [favoritos, setFavoritos] = useState<any[]>([]);

  // Al cargar el componente, obtenemos los libros del localStorage
  useEffect(() => {
    const librosFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setFavoritos(librosFavoritos);
  }, []);

  // Borra todos los libros favoritos (con confirmación)
  const borrarFavoritos = () => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar todos los libros favoritos?');
    if (confirmacion) {
      localStorage.removeItem('favoritos');
      setFavoritos([]);
      alert('🗑️ Todos los favoritos han sido borrados.');
    }
  };

  // Elimina un solo libro favorito por su ID
  const eliminarUno = (id: string) => {
    const nuevosFavoritos = favoritos.filter((libro) => libro.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">📚 Mis Libros Favoritos</h1>

      {/* Mostrar botón solo si hay favoritos */}
      {favoritos.length > 0 && (
        <button className="btn btn-danger mb-4" onClick={borrarFavoritos}>
          🗑️ Borrar todos los favoritos
        </button>
      )}

      {/* Mostrar mensaje si no hay libros */}
      {favoritos.length === 0 ? (
        <p>No tienes libros favoritos aún. ¡Ve a explorar y añade algunos! ❤️</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favoritos.map((libro) => (
            <div className="col" key={libro.id}>
              <TarjetaLibro libro={libro} onEliminar={eliminarUno} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;

