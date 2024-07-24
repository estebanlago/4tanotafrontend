import React from 'react';
import Nota from './Nota.js';

function ListaNotas({ notas }) {
  return (
    <div class="row">
      {notas.map((nota, indice) => (
        <div key={indice} class="col-12 col-md-6 col-lg-3 mb-3">
          <Nota nota={nota} />
        </div>
      ))}
    </div>
  );
}

export default ListaNotas;
