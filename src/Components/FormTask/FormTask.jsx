import React from 'react'

const FormTask = () => {
    return (
        <form className='d-flex bd-highlight'>
            <input className="form-control bd-highlight me-3 bg-transparent text-secondary fw-bolder" type="text" placeholder="Escriba su tarea aqui..."/>
            <button className="btn btn-outline-success bd-highlight fw-bolder"><i className="bi bi-journal-plus"></i> Agregar</button>
        </form>
    )
}

export default FormTask