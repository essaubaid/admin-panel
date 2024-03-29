import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'
import { Redirect, useHistory } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const path = `/`;
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault()
        const res = await login(dispatch, { username, password });
        if (res) {
            console.log(res)
            history.push(path);
        }

    }

    return (
        <div style={{ height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            <input style={{ padding: 10, marginBottom: 20 }} type="text" placeholder='username' onChange={e => setUsername(e.target.value)}></input>
            <input style={{ padding: 10, marginBottom: 20 }} type="text" placeholder='password' onChange={e => setPassword(e.target.value)}></input>
            <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
                Login
            </button>
        </div>
    )
}

export default Login
