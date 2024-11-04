import { useState, useEffect } from 'react';
import axios from 'axios';
import endpoints from '../api/config'; // Importa los endpoints

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      setCargando(true);
      setError(null);
      try {
        const respuesta = await axios.get(endpoints.productos);
        setProductos(respuesta.data);
        setError(null);
      } catch (err) {
        if (err.response) {
          // El servidor respondió con un código de estado fuera del rango 2xx
          setError(`Error ${err.response.status}: ${err.response.data?.message || 'No se pudieron cargar los productos.'}`);
        } else if (err.request) {
          // La solicitud fue hecha pero no hubo respuesta
          setError('No hay respuesta del servidor. Verifica tu conexión a internet.');
        } else {
          // Otro tipo de error en la solicitud
          setError(`Error al hacer la solicitud: ${err.message}`);
        }
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  const filtrarProductos = (query) => {
    return productos.filter(producto => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            producto.descripcion.toLowerCase().includes(lowerCaseQuery) || 
            producto.id.toString().includes(lowerCaseQuery)
        );
    });
  };


  return { productos, cargando, error };
};

export default useProductos;