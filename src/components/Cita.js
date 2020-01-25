import React, { Fragment } from 'react';


const Cita = ({cita, eliminarCita}) => (
    <Fragment>
      <div className="card mb-2">
        <p><span className="txt-secondary txt-strong">Mascota:</span> { cita.mascota }</p>
        <p><span className="txt-secondary txt-strong">Dueño:</span> { cita.propietario }</p>
        <p><span className="txt-secondary txt-strong">Fecha de alta:</span> { cita.fecha }</p>
        <p><span className="txt-secondary txt-strong">Hora de ingreso:</span> { cita.hora }</p>
        <p><span className="txt-secondary txt-strong">Síntomas:</span> { cita.sintomas }</p>

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