import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../helpers'
// Documentacion
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuesto,restante}) => {
    return ( 
        <Fragment>
            <div className=" alert alert-primary">
                Presupuesto : {presupuesto} Bs
            </div>
            {/* usaremos un helper para las alertas es un archivo q contienen funciones reutilizables */}
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante : {restante} Bs
            </div>
        </Fragment>
     );
}


ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;