import React, { Fragment } from 'react';


const Cita = ({cita}) => (
    <Fragment>
      <div className="card mb-2">
        <p>Mascota: <span>{ cita.mascota }</span></p>
        <p>Dueño: <span>{ cita.propietario }</span></p>
        <p>Fecha de alta: <span>{ cita.fecha }</span></p>
        <p>Hora de ingreso: <span>{ cita.hora }</span></p>
        <p>Síntomas: <span>{ cita.sintomas }</span></p>
      </div> 
    </Fragment>
  );

export default Cita