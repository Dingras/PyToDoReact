import React, { useEffect, useState } from 'react'
import './Home.css'
import Task from '../../Components/Task/Task.jsx'
import FormTask from '../../Components/FormTask/FormTask'
import { handlerUserID } from '../../Service/Users/Users'
import { handlerTasksUser } from '../../Service/Tasks/Tasks'

const Home = (props) => {

    const [ dataUser, setDataUser] = useState('')
    const [ dataTasks, setDataTask] = useState([])

    useEffect(() => {
        if (dataUser === ''){
            handlerUserID(props.id_user).then((responseUser) =>{
                setDataUser(responseUser)
                console.log('Cargo usuario')
            })
        }
    }, []);
    useEffect(()=>{
        handlerTasksUser(props.id_user).then((responseTask) =>{
                setDataTask(responseTask)
                console.log('Cargo tareas')
            }
        )
    },[dataUser])
    return (
        <div>
            <nav className="navbar navbar-light bg-dark d-flex">
                <img src="https://raw.githubusercontent.com/fabiospampinato/vscode-todo-plus/master/resources/logo/logo.png" id="img-perfil" alt="MiPerfil"/>
                <h3 className='text-white fw-bolder'> {dataUser.name}</h3>
                <button className="btn btn-outline-danger  me-2 ms-auto bd-highlight fw-bolder"><i className="bi bi-door-closed"></i> Salir</button>
            </nav>
            <FormTask/>
            <div className="container p-5">
                <div className="row g-2">
                    {
                        dataTasks.map((task)=>{
                            return(
                                <div className="col-6" key={task.id}>
                                    <div className="p-3 border bg-secondary"> <Task text={task.text} created_at={task.created_at} completed_at={task.completed_at}/> </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home