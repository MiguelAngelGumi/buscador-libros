// Importamos los componentes necesarios de React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos las páginas de la aplicación
import Inicio from './Paginas/Inicio';         // Página principal (landing)
import Favoritos from './Paginas/Favoritos';   // Página de libros favoritos
import Resultados from './Paginas/Resultados'; // Página de resultados de búsqueda

// Importamos la barra de navegación que estará presente en todas las páginas
import BarraNavegacion from './components/BarraNavegacion';

// Definimos el componente principal 'App'
function App() {
  return (
    // Envolvemos todo en el Router para que funcione el enrutamiento
    <Router>
      {/* Barra de navegación común a todas las páginas */}
      <BarraNavegacion />

      {/* Definimos las rutas disponibles con sus componentes correspondientes */}
      <Routes>
        <Route path="/" element={<Inicio />} />            {/* Página de inicio */}
        <Route path="/resultados" element={<Resultados />} />  {/* Resultados de búsqueda */}
        <Route path="/favoritos" element={<Favoritos />} />    {/* Libros guardados como favoritos */}
      </Routes>
    </Router>
  );
}

// Exportamos el componente App para que se pueda renderizar en el archivo main.tsx
export default App;

