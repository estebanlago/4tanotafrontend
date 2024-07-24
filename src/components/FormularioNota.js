// Importación de hooks.
import React, { useState, useRef, useEffect } from 'react';

// Definición del componente funcional FormularioNota, y sus variables.
function FormularioNota({ agregarNota }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);

  // Referencias DOM.
  const inputDescripcionRef = useRef(null);
  const divErrorDescripcionRef = useRef(null);

  // Componente para manejar el envío de la nota.
  const manejarEnvio = (e) => {
    e.preventDefault();
    const input_descripcion = inputDescripcionRef.current;
    const div_error_descripcion = divErrorDescripcionRef.current;

    // Elimina alerta de error.
    div_error_descripcion.innerHTML = "<br>";
    input_descripcion.classList.remove("is-invalid");

    // Si la descripción equivale a null, dispara mensaje de error.
    if (!descripcion) {
      div_error_descripcion.innerHTML = "Casilla obligatoria.";
      div_error_descripcion.className = "text-danger small mt-1";
      input_descripcion.classList.add("is-invalid");
      return;
    }
    
    // Si se cumplen las condiciones, agrega la nota.
    agregarNota({
      titulo,
      descripcion,
      importante
    });
    setTitulo('');
    setDescripcion('');
    setImportante(false);
  };

  // Retorna estructura del formulario (casillas para input).
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
        <div class="col-12 col-md-4 mb-5 form-group">
          <input
            type="text"
            id="descripcion"
            ref={inputDescripcionRef}
            class="form-control"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <div id="error-descripcion" ref={divErrorDescripcionRef}><br /></div>
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

// Exporta componente.
export default FormularioNota;