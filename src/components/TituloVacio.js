import React, { Fragment } from 'react';

const TituloVacio = () => {
  return (
    <Fragment>
      <div className="card-empty txt-a-c">
        <h3>No hay tareas</h3>
        <i className="a-chrome-dino af-x6 mt-2"></i>
      </div>
    </Fragment>
  );
};

export default TituloVacio