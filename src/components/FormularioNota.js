import React, { useState } from 'react';

function FormularioNota({ agregarNota }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);

  var input_descripcion = document.getElementById("descripcion")
  var div_error_descripcion = document.getElementById("error-descripcion");

  input_descripcion.classList.remove("is-invalid");
  div_error_descripcion.innerHTML = "";

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!descripcion) {
      div_error_descripcion.innerHTML = "Casilla obligatoria.";
      div_error_descripcion.className = "text-danger small mt-1";
      input_descripcion.classList.add("is-invalid");
      return;
    }
    agregarNota({
      titulo,
      descripcion,
      importante
    });
    setTitulo('');
    setDescripcion('');
    setImportante(false);
  };

  return (
    <form onSubmit={manejarEnvio}>
        <div class="row">
            <div class="col-12 col-md-3 mb-5 form-group">
                <input
                type="text"
                class="form-control"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div class="col-12 col-md-4 mb-4 form-group">
                <input
                type='text'
                id="descripcion"
                class="form-control"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                />
                <div id="error-descripcion"><br></br></div>
            </div>
            <div class="col-6 col-md-2 mb-5 d-flex justify-content-center form-check">
                <input
                type="checkbox"
                class="form-check-input"
                checked={importante}
                onChange={(e) => setImportante(e.target.checked)}
                />
                <label class="form-check-label"><span>&nbsp;&nbsp;&nbsp;</span>¿Es Importante?</label>
            </div>
            <div class="col-6 col-md-3 mb-5">
                <button type="submit" class="btn btn-dark w-100">Agregar</button>
            </div>
        </div>
    </form>
  );
}

export default FormularioNota;
