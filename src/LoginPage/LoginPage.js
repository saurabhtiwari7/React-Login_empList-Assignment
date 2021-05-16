import React, { useState } from 'react';
import Username from '../LoginPage/Username';
import Password from '../LoginPage/Password';
import ButtonLogin from '../LoginPage/ButtonLogin';
import * as loginData from './Login.json';
import {
    Redirect
  } from "react-router-dom";
 function LoginPage() {

    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);
    var [redirect, setRedirect] = useState(null);


    const inputEvent = (event) => {
        // console.log(event.target.value)
         
        if(event.target.value.length < 3) {
            setUserError(true)
        }
        else {
            setUserError(false)
        }
        setName(event.target.value);
      };

      const inputPassEvent = (event) => {
        // console.log(event.target.value)

        if(event.target.value.length < 3) {
            setPassError(true)
        }
        else {
            setPassError(false)
        }
        setPass(event.target.value);
    };

    if (redirect) {
        return <Redirect to={redirect} />
      }


    const onSubmits = (event) => {
        // console.log('i clicked', event);
  

       

        if((name===loginData.username) && (pass===loginData.password)){
            setRedirect(redirect = '/employee');
            return  <Redirect to={redirect} /> 
        }
        else {
            alert('Not submitted');
        }
        event.preventDefault();


    };

    return (
        <div className="loginCenter">
        <form onSubmit={onSubmits}>
            <div>
                <h1>Login Here</h1>
                <Username uname={name} change={inputEvent} />
                {userError?<span>User not valid</span>: ""}
                <br />
                <Password upass={pass} changePass={inputPassEvent} />
                {passError?<span>Password not valid</span>: ""}

                <br />
                <ButtonLogin click={onSubmits} />
            </div>
        </form>
        </div>
    )
}

export default LoginPage
