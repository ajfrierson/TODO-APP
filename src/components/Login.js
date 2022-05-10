import React, { useState } from "react";
import '../components/Login.css';

function LoginComponent() {

    let [password, setPassword] = useState("");
    let [username, setUsername] = useState("");

    function handleUsernameChange(e){
        setUsername(e.target.value);
      
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    
    }

    return(
        <div className="LoginComponent">
            Username: <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            Password: <input type="password" name="password" value={password} onChange={handlePasswordChange}/>

            <button className="loginButton">Login</button>
        </div>
    );
}

export default LoginComponent;