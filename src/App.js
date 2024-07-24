// Importación de componentes, hooks y estilizado CSS.
import React, { useState, useEffect } from 'react';
import FormularioNota from './components/FormularioNota';
import ListaNotas from './components/ListaNotas';
import './estilo.css'

// Componente principal App.
function App() {
  const [notas, setNotas] = useState([]);

  // Carga de notas almacenadas en localStorage.
  // Actualiza el estado de las notas.
  useEffect(() => {
    const notasAlmacenadas = JSON.parse(localStorage.getItem('notas')) || [];
    setNotas(notasAlmacenadas);
  }, []);

  // Almacena notas en localStorage si registra un cambio en el estado de las notas.
  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  // Componente para agregar una nueva nota.
  const agregarNota = (nota) => {
    const nuevaNota = { ...nota, id: Date.now() }; 
    setNotas([...notas, nuevaNota]);
  };

  // Componente para eliminar una nota.
  const eliminar = (id) => {
    const nuevasNotas = notas.filter(nota => nota.id !== id);
    setNotas(nuevasNotas);
  };

  // Retorna estructura de la aplicación..
  return (
    <div class="container mt-5">
      <h1>Post It Simulator!</h1>
      <FormularioNota agregarNota={agregarNota} />
      <ListaNotas notas={notas} eliminar={eliminar} />
    </div>
  );
}

// Exporta componente.
export default App;
