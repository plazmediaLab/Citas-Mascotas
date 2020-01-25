import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Cita = ({cita, eliminarCita}) => (
    <Fragment>
      <div className="card mb-2">
        <p><span className="txt-secondary">Mascota:</span> { cita.mascota }</p>
        <p><span className="txt-secondary">Dueño:</span> { cita.propietario }</p>
        <p><span className="txt-secondary">Fecha de alta:</span> { cita.fecha }</p>
        <p><span className="txt-secondary">Hora de ingreso:</span> { cita.hora }</p>
        <p><span className="txt-secondary">Síntomas:</span> { cita.sintomas }</p>
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


Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}


export default Cita