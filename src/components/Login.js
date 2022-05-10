import React from "react";
import '../components/Login.css';

function LoginComponent() {
    return(
        <div className="LoginComponent">
            Username: <input type="text" name="username"/>
            Password: <input type="password" name="password"/>

            <button className="loginButton">Login</button>
        </div>
    );
}

export default LoginComponent;