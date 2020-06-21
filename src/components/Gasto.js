import React from 'react';
// Documentacion
import PropTypes from 'prop-types'

const Gasto = ({ gasto }) => (
    <li className="gastos">
        <p>
            {gasto.nombreg}
            <span className="gasto">{gasto.cantidadg} Bs</span>
        </p>
    </li>
)

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;