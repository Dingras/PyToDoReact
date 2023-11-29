import './Login.css'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { handlerLogIn } from '../../Service/Login/Login';

const Login = (props) => {

    const [ formData, setFormData] = useState({});
    const [ success, setSuccess] = useState(false);

    const HandleSubmit =async(e)=> {
        e.preventDefault()
        let resp = await handlerLogIn(formData?.name,formData?.password)
        if (resp?.user_exist !== undefined){
            setSuccess(true);
            props.setToken(resp.user_exist)
            props.setDataUser(resp.user_id)
        }
    }

    return (
        <>
        {
            success && (<Navigate to={"/home"} replace={true}/>)
        }
        <form className="card mx-auto my-5 w-50">
            <div className="card-header">
                <h3 className='text-center'>
                    Iniciar sesión
                </h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" id="user-name" aria-describedby="userHelp" onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
                    <div id="userHelp" className="form-text">Ingrese aqui, el nombre de usuario con el que se ha registrado.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                </div>
            </div>
            <div className="card-footer">
                <div className='d-grid gap-2 col-6 mx-auto'>
                    <button className="btn btn-primary" onClick={HandleSubmit}>Ingresar</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Login
