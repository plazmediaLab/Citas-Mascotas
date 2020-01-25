import React, { useState } from 'react';
import Formulario from './components/Formulario.js'
import Cita from './components/Cita.js'

function App() {

  /*=================================================================================
  *	 State
  *  [nameState, functionModifiesState]
  * --------------------------------------------------------------------------------*/
  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  // Funcción que tome las citas actuales y agrege la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita])
    console.log('Sita creada', citas)
  }

  return (
    <div className="container fg-dm-1 p-3 mt-3">
      <h1 className="txt-a-c font-1 mb-5"><i className="a-isotype-filling txt-secondary af-m"></i> Administrador de pacientes</h1>

      <div className="fg-dm-2 p-3">
        <div className="col-row col-grid">
          <div className="col-6">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="col-6">
            <h3>Administrar tus citas</h3>
            <div className="mt-5">
              {citas.map(cita => {
                return <Cita
                  key={cita.id}
                  cita={cita}
                />
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
