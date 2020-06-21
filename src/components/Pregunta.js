import React, { Fragment, useState } from 'react';
import Error from './Error'

// Documentacion
import PropTypes from 'prop-types'

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta}) => {


    // iniciamos un state 
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false)



    const definirPresupuesto = e => {
        // lo parseamos a int xq devuelve un string
        // llenamos el state
        guardarCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = e => {
        e.preventDefault()


        // validacion
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return;
        }

        // si pasa la validacion
        guardarError(false)
        //le mandamos la cnatidad a los props para hacer operaciones
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)

    }

    return (
        <Fragment>
            <h2 className="mb-1 mt-3 font-weight-bold">Inserte su Presupuesto</h2>
            {/* mostraremos mensaje si el error es correcto y si no lo es no mostrara nada */}
            {error ? <Error mensaje='El presupuesto es Incorrecto' /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Ingrese su Presupuesto"
                            onChange={definirPresupuesto}
                        />
                    </div>
                </div>
                <button
                    type="sumbit"
                    className="btn btn-primary form-control mb-4"
                // value="Definir Presupuesto"
                >Definir Presupuesto</button>
            </form>

        </Fragment>
    );
}


Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}

export default Pregunta;