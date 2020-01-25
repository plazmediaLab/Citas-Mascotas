import React, { Fragment } from 'react';


const Cita = ({cita, eliminarCita}) => (
    <Fragment>
      <div className="card mb-2">
        <p>Mascota: <span>{ cita.mascota }</span></p>
        <p>Dueño: <span>{ cita.propietario }</span></p>
        <p>Fecha de alta: <span>{ cita.fecha }</span></p>
        <p>Hora de ingreso: <span>{ cita.hora }</span></p>
        <p>Síntomas: <span>{ cita.sintomas }</span></p>

        {/* <p>Mascota: <span>{  }</span></p>
        <p>Dueño: <span>{  }</span></p>
        <p>Fecha de alta: <span>{  }</span></p>
        <p>Hora de ingreso: <span>{  }</span></p>
        <p>Síntomas: <span>{  }</span></p> */}
        <hr />
        <div className="jc-end">
          <button
            className="btn btn-s-br btn-cancel"
            onClick={ () => eliminarCita(cita.id) }
          ><i className="a-trash-o"></i></button>
        </div>
      </div> 
    </Fragment>
  );

export default Cita