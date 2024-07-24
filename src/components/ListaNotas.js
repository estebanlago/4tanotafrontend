import React from 'react';
import Nota from './Nota.js';

function ListaNotas({ notas, eliminar }) {
  return (
    <div class="row">
      {notas.map((nota) => (
        <div key={nota.id} class="col-12 col-md-6 col-lg-3 mb-3">
          <Nota nota={nota} eliminar={eliminar} />
        </div>
      ))}
    </div>
  );
}

export default ListaNotas;
