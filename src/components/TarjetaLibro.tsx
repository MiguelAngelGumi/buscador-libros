// Importamos React
import React from 'react';

// Interfaz que define las props que recibe este componente
interface Props {
  // libro es un objeto con los datos del libro (podemos mejorarlo con tipado más preciso)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  libro: any;

  // onEliminar es una función opcional (solo se usa cuando queremos eliminar el libro de favoritos)
  onEliminar?: (id: string) => void;
}

// Componente funcional TarjetaLibro
const TarjetaLibro: React.FC<Props> = ({ libro, onEliminar }) => {
  // Extraemos propiedades del libro (con fallback por si faltan datos)
  const titulo = libro.volumeInfo?.title || 'Sin título';
  const autores = libro.volumeInfo?.authors?.join(', ') || 'Autor desconocido';
  const imagen = libro.volumeInfo?.imageLinks?.thumbnail;
  const idLibro = libro.id;

  // Función para agregar libro a favoritos (almacenado en localStorage)
  const agregarAFavoritos = () => {
    // Obtenemos los favoritos actuales desde localStorage
    const favoritosActuales = JSON.parse(localStorage.getItem('favoritos') || '[]');

    // Verificamos si el libro ya está en favoritos
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const yaExiste = favoritosActuales.some((fav: any) => fav.id === idLibro);

    if (!yaExiste) {
      // Si no existe, lo agregamos
      const nuevosFavoritos = [...favoritosActuales, libro];
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      alert('📚 Libro añadido a favoritos');
    } else {
      // Si ya existe, mostramos una alerta
      alert('⚠️ Este libro ya está en favoritos');
    }
  };

  // Función que se llama cuando se quiere eliminar un libro desde favoritos
  const eliminarFavorito = () => {
    if (onEliminar) {
      onEliminar(idLibro); // Llama a la función del padre con el ID del libro
    }
  };

  return (
    <div className="card h-100">
      {/* Mostramos la imagen si existe */}
      {imagen && <img src={imagen} className="card-img-top" alt={titulo} />}

      <div className="card-body d-flex flex-column">
        {/* Título del libro */}
        <h5 className="card-title">{titulo}</h5>

        {/* Autores del libro */}
        <p className="card-text">{autores}</p>

        {/* Mostramos botón dependiendo si estamos en modo agregar o eliminar */}
        {!onEliminar ? (
          <button className="btn btn-outline-danger mt-auto" onClick={agregarAFavoritos}>
            ❤️ Añadir a Favoritos
          </button>
        ) : (
          <button className="btn btn-outline-secondary mt-auto" onClick={eliminarFavorito}>
            🗑️ Eliminar de Favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default TarjetaLibro;

