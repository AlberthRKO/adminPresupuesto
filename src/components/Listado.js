import React from 'react';
import Gasto from './Gasto'

// Documentacion
import PropTypes from 'prop-types'

const Listado = ({gastos}) => (
    <div className="gastos-realizados">
        <h2 className="mt-3 mb-1 font-weight-bold">Listado</h2>
        {gastos.map(gasto =>(
            //le pasamos la lista de gastos recibida y nos lo devuelve en li 
            <Gasto
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
)

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;