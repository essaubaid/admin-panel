import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'
import { Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password });

    }

    return (
        <div style={{ height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            <input style={{ padding: 10, marginBottom: 20 }} type="text" placeholder='username' onChange={e => setUsername(e.target.value)}></input>
            <input style={{ padding: 10, marginBottom: 20 }} type="text" placeholder='password' onChange={e => setPassword(e.target.value)}></input>
            <Link to="/home/">
            <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
                Login
            </button>
            </Link>
        </div>
    )
}

export default Login
