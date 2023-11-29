import React from 'react'
import './Task.css'

const Task = (props) => {
    return (
        <div className="card text-center">
            <div className="card-header d-flex bd-highlight">
                <div className='bd-highlight fw-bolder'>Creada: {props.created_at}</div>
                <div className='ms-auto bd-highlight fw-bolder'>Finalizada: {props.completed_at}</div>
            </div>
            <div className="card-body">
                <p className="card-title fw-bolder">
                    {props.text}
                </p>
            </div>
            <div className="card-footer">
                <button className="btn btn-success fw-bolder">
                    <i className="bi bi-journal-check"> Completo</i>
                </button>
                <button className="btn btn-warning mx-2 fw-bolder">
                    <i className="bi bi-pencil-square"> Editar</i>
                </button>
                <button className="btn btn-danger fw-bolder">
                    <i className="bi bi-journal-x"> Eliminar</i>
                </button>
            </div>
        </div>
    )
}

export default Task