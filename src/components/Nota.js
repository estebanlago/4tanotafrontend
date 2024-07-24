import React from 'react';

function Nota({ nota }) {
  const { titulo, descripcion, importante } = nota;
  return (
    <div class={`card ${importante ? 'bt-importante' : 'bt-no-importante'} text-black`}>
      <div class="card-body">
        <h4 class="card-title">{titulo}</h4>
        <p class="card-text">{descripcion}</p>
      </div>
    </div>
  );
}

export default Nota;
