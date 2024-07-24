// Importación de librerías.
import React from 'react';

// Estructación y definición de componente Nota.
function Nota({ nota, eliminar }) {
  const { titulo, descripcion, importante } = nota;
  return (
    <div class={`card ${importante ? 'bt-importante' : 'bt-no-importante'} text-black`}>
      <div class="card-body">
        <h4 class="card-title">{titulo}</h4>
        <p class="card-text">{descripcion}</p>
        <button class="btn btn-secondary btn-sm position-absolute bottom-0 end-0 mb-2" onClick={() => eliminar(nota.id)}><i class="bi bi-trash"></i></button>
      </div>
    </div>
  );
}

// Exporta componente.
export default Nota;
