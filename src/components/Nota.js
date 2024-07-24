import React from 'react';

function Nota({ nota }) {
  const { titulo, descripcion, importante } = nota;
  return (
    <div className={`card ${importante ? 'bt-importante' : 'bt-no-importante'} text-black`}>
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
}

export default Nota;
