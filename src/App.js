import React, { useState, useEffect } from 'react';

import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


function App() {

  // STAtes de los presupuestos y sus restantes
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  // state para los grastos acumulados en arreglo
  const [gastos, guardarGastos] = useState([])
  //para evitar lista anteiror q solo muestra Bs crea
  const [creargasto, guardarCrearGasto] = useState(false)

  // useState que tendra el gasto desde el formulario
  const [gasto, guardarGasto] = useState({}) //sera un objeto xq asi lo recibimos desde el formulario

  // oocultaremos el input de presupuesto cuando se aya cargado los datos  con una carga condicional
  const [mostratpregunta, actualizarPregunta] = useState(true)
  //arranca en true xq se nostrara aun hasta q se ara falso cuando le demo en el boton



  // useEffect que actualizara el restante
  // funcion q se enviara a formulario y traera lista de gastos
  
  useEffect(() => {
    //para evitar lista anteiror q solo muestra Bs crea
    if (creargasto) {
      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      // resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidadg;
      guardarRestante(presupuestoRestante)

      guardarCrearGasto(false)
      
    }
  }, [gasto, creargasto,gastos,restante])



  /*  // funcion q se enviara a formulario y traera lista de gastos
   const agregarNuevoGasto = gasto =>{
     guardarGastos([
       ...gastos,
       gasto
     ])
   } */


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
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="col-md-6">
                {/* en este componente mostraremos la lista */}
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  // le pasamos lo recibide de pregunta
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }

        </div>
      </header>
    </div>
  );
}

export default App;
