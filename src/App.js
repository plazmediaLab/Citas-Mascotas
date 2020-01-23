import React from 'react';
import Formulario from './components/Formulario.js'

function App() {
  return (
    <div className="container fg-dm-1 p-3 mt-3">
      <h1 className="txt-a-c font-1 mb-5"><i className="a-emoji_food_beverage txt-secondary af-m"></i> Administrador de pacientes</h1>

      <div className="fg-dm-2 p-3">
        <div className="col-row">
          <div className="col-6">
            <Formulario />
          </div>
          <div className="col-6">2</div>

        </div>
      </div>
    </div>
  );
}

export default App;
