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
  const crearCita = cita => {
    guardarCitas([...citas, cita])
    console.log(citas)
  }

  return (
    <div className="container fg-dm-1 p-3 mt-3">
      <h1 className="txt-a-c font-1 mb-5"><i className="a-emoji_food_beverage txt-secondary af-m"></i> Administrador de pacientes</h1>

      <div className="fg-dm-2 p-3">
        <div className="col-row">
          <div className="col-6 pr-2">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="col-6 pl-2">
            <h3>Administrar tus citas</h3>
            {citas.map(cita => {
              return <Cita
                key={cita.id}
                cita={cita}
              />
            })}
            <Cita />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
