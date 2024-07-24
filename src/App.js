import React, { useState, useEffect } from 'react';
import FormularioNota from './components/FormularioNota';
import ListaNotas from './components/ListaNotas';
import './estilo.css'

function App() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const notasAlmacenadas = JSON.parse(localStorage.getItem('notas')) || [];
    setNotas(notasAlmacenadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (nota) => {
    setNotas([...notas, nota]);
  };

  return (
    <div className="container mt-5">
      <h1>Post It Simulator!</h1>
      <FormularioNota agregarNota={agregarNota} />
      <ListaNotas notas={notas} />
    </div>
  );
}

export default App;
