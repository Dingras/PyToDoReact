import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login.jsx'
import Task from './Components/Task/Task.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

function App() {

    const [tokenData, setTokenData] = useState(false)
    const [ dataUser, setDataUser] = useState()

    return (
            <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Login setToken = {setTokenData} setDataUser = {setDataUser}/>} />
                    <Route path='/home' element= {<Home id_user = {dataUser} token={tokenData}/>} />
                    <Route path='/task' element= {<Task />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
