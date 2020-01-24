import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

// Aplicamos Destructuring object a PROPS [parametro props]
const Formulario = ({crearCita}) => {

  /*=================================================================================
  *	 State
  *  [nameState, functionModifiesState]
  * --------------------------------------------------------------------------------*/
  // 
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });
  const [error, actualizarError] = useState(false);

  /* ============================================================================= */

  // Función que se ejecuta cada que el usiario escríbe en un input
  const actualizarState = e => {
    actualizarCita({
      // Tomar una copia del objeto [cita]
      ...cita,
      [e.target.name]: e.target.value
    })
  };

  // Destructuring object | Extraer los valores
  const {mascota, propietario, fecha, hora, sintomas} = cita;

  // Submit Form
  const submitCita = e => {
    e.preventDefault();

    // Validar datos
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true)
      return;
    }
    // Limpiar mensaje error
    actualizarError(false)
    // Asignar un ID
    cita.id = uuid();
    // Crear cita
    crearCita(cita)
    // Reiniciar Form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  };

  return (
    <Fragment>
      <h3>Crear Cita</h3>

      { error ? <p className="msn msn-error">Todos los campos son obligatorios</p> : null }

      <form
        onSubmit={submitCita}
      >
        <div className="form-item">
          <label>Nombre mascota</label>
          <input 
            type="text"
            name="mascota"
            className="input-100 mt-1"
            placeholder="Nombre mascota"
            onChange={actualizarState}
            value={mascota}
          />
        </div>
        <div className="form-item">
          <label>Nombre dueño</label>
          <input 
            type="text"
            name="propietario"
            className="input-100 mt-1"
            placeholder="Nombre del dueño"
            onChange={actualizarState}
            value={propietario}
          />
        </div>
        <div className="form-item">
          <label>Fecha de ingreso</label>
          <input 
            type="date"
            name="fecha"
            className="input-100 mt-1"
            onChange={actualizarState}
            value={fecha}
          />
        </div>
        <div className="form-item">
          <label>Hora de ingreso</label>
          <input 
            type="time"
            name="hora"
            className="input-100 mt-1"
            onChange={actualizarState}
            value={hora}
          />
        </div>
        <div className="form-item">
          <label>Síntomas</label>
          <textarea 
            name="sintomas"
            className="input-100 mt-1"
            placeholder="Describe los sintomas que presenta el paciente a su ingreso"
            onChange={actualizarState}
            value={sintomas}
          ></textarea>
        </div>
        <div className="mt-4 jc-end">
          <button
            className="btn btn-br btn-acept"
          ><i className=" a-assignment_turned_in"></i> Agregar cita</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario