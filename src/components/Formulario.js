import React,{useState} from 'react';

//reutilizanmos el error
import Error from './Error'

const Formulario = () => {
    
    
    // creamos un state para capturar los datos del Formulario
    const [nombreg,guardarG] = useState('')
    const [cantidadg , guardarCantG] = useState(0)
    const [error, guardarError] = useState(false)
    

    // Envio de cuiando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault()

        // Validacion
        if(cantidadg < 1 || isNaN(cantidadg) || nombreg.trim() ===''){
            guardarError(true)
            return
        }
        guardarError(false)

        // Construir gasto
        // un objeto para llenar
        

        // Pasar el gasto al componente principal

        // resetear el form

    }
    
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2 className="mb-1 mt-3 font-weight-bold">Inserte sus gasto a la semana</h2>

            {error ? <Error mensaje = 'Ambos campos son obligatorios o Presupuesto Incorrecto' /> : null}

            <div className="form-group campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-file-invoice-dollar"></i></span>
                    </div>
                    <input
                        id="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Ej: Pasaje"
                        // capturamos los datos y ponemos valor del envio
                        value={nombreg}
                        onChange={ e => guardarG(e.target.value) }
                    />
                </div>
            </div>
            <div className="form-group campo">
                <label htmlFor="cantidad">Cantidad a Gastar</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
                    </div>
                    <input
                        id="cantidad"
                        type="number"
                        className="form-control"
                        placeholder="Ej: 2 bs"
                        onChange={e => guardarCantG(parseInt(e.target.value))}
                    />
                </div>
            </div>
            <button
                type="sumbit"
                className="btn btn-primary form-control"
            // value="Definir Presupuesto"
            >Guardar</button>
        </form>
    );
}

export default Formulario;