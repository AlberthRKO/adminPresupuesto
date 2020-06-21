import React, { useState } from 'react';

import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'


function App() {

  // STAtes de los presupuestos y sus restantes
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)


  // oocultaremos el input de presupuesto cuando se aya cargado los datos  con una carga condicional
  const [mostratpregunta, actualizarPregunta] = useState(true)
  //arranca en true xq se nostrara aun hasta q se ara falso cuando le demo en el boton


  return (
    <div className="container">
      <header>

        <div className="contenido-principal contenido">
          <h1>Gasto Semanal</h1>
          {mostratpregunta ? //si es true mostrara la pregunta, y sino ya no se mostrara y mostrara el formulario
            <Pregunta
              // le pasamos los states para q devuelva resultados
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            /> :
            <div className="row">
              <div className="col-md-6">
                <Formulario />
              </div>
              <div className="col-md-6">2</div>
            </div>
          }

        </div>
      </header>
    </div>
  );
}

export default App;
