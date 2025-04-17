// Importamos la función de configuración de Vite y el plugin de React
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exportamos la configuración para Vite
export default defineConfig({
  // 👇 Esta propiedad base es MUY IMPORTANTE para que funcione el despliegue en GitHub Pages
  // Debe ser igual al nombre del repositorio si usas GitHub Pages
  base: '/buscador-libros/',

  plugins: [react()]
});
