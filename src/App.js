import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario.js'
import Cita from './components/Cita.js'
import TituloVacio from './components/TituloVacio';

function App() {

  // Citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  /*=================================================================================
  *	 State
  *  [nameState, functionModifiesState]
  * --------------------------------------------------------------------------------*/
  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // [useEffect] realiza ciertas operaciones cuando el state cambia
  // Se ejecuta cuando el componente esta listo y cuando cambia el estado
  // Siempre es un Arrow Function
  // Pasar como segundo parametro un array vacío [], ya que si no se agrega, el useEffect entrara en un ciclo continuo
  // Este array contendra las dependencias vajo las que se ejecutara [citas]
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales] );


  // Funcción que tome las citas actuales y agrege la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita])
  }

  // Finsión que elimine una cita por su id
  const eliminarCita = id => {
    // [.filter()] busca coincidencia de filtro, por lo que queremos es devolver los elementos que son diferentes al id de referencia
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas)
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? <TituloVacio /> : <h3>Administra tus citas</h3>;

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
            { titulo }
            <div className="mt-5">
              {citas.map(cita => {
                return <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
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
