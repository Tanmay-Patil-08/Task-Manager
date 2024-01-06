import { useState } from "react"
import {useNavigate } from 'react-router-dom'
import { useAuth } from "../SecurityContext/AuthContext"
import "./styles.css";

export default function LoginComponent(params) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showErrorMessage, setErrorMessage] = useState(false)
    const authContext = useAuth()
    const navigate = useNavigate()

    function handelUsernameChange(event) {
        setUsername(event.target.value)


    }
    function handelPasswordChange(event) {
        setPassword(event.target.value)


    }
    async function handelSubmit() {
        // console.log(username+" "+password )
        if (await authContext.login(username,password)) {
            navigate(`/welcome`)
        } else {
            setErrorMessage(true)
        }

    }


    return (
        <div className="container">
        <div className="Login" >

        <div className="LoginForm">
            <h1>Time to login</h1>
            <div>
                <label>
                    User Name
                </label>
                <input type="text" name="username" value={username} onChange={handelUsernameChange} />
            </div>
            <div>
                <label>
                    Password
                </label>
                <input type="password" name="password" value={password} onChange={handelPasswordChange} />
            </div>
            <div>
                <button type="button" name="login" onClick={handelSubmit}>Loging</button>
            </div>
            {showErrorMessage && <div className="errorMessage">Authentication Failed.Please check your credentials</div>
            }

        </div>
    </div>
    </div>
    )
    
}