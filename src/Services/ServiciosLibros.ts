// src/Services/ServiciosLibros.ts
import axios from 'axios';

const URL_BASE = 'https://www.googleapis.com/books/v1/volumes';

// La función recibe el término y el índice de inicio (paginación)
export const buscarLibros = async (termino: string, startIndex = 0) => {
  try {
    const respuesta = await axios.get(URL_BASE, {
      params: {
        q: termino,
        startIndex,
        maxResults: 9,
        orderBy: 'relevance',
      },
    });

    return respuesta.data.items || [];
  } catch (error) {
    console.error('Error al buscar libros:', error);
    return [];
  }
};



