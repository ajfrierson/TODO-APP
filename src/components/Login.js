import React, { useState } from "react";
import '../components/Login.css';

function LoginComponent() {

    let [password, setPassword] = useState('');
    let [username, setUsername] = useState('');

    let [loggedIn, setLoggedIn] = useState(false);

    function handleUsernameChange(e){
        setUsername(e.target.value);
      
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    
    }

    function loginClick(){
        if(username == 'username' && password == "password"){
            setLoggedIn(true);

        } else {
            setLoggedIn(false);
        }
    }

    function ShowValidCredentials(){
        if(loggedIn){
            return <div>Login Successful!!</div>
        } else {
            return <div>Invalid Credentials!!</div>
        }
    }

    return(
        <div className="LoginComponent">
            <ShowValidCredentials loggedIn={setLoggedIn}/>
            Username: <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            Password: <input type="password" name="password" value={password} onChange={handlePasswordChange}/>

            <button className="loginButton" onClick={loginClick}>Login</button>
        </div>
    );
}



export default LoginComponent;