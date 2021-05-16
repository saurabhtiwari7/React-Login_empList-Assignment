import React from 'react'

function ButtonLogin(props) {

   
    return (
        <>
            <button className="btn btn-primary" type="submit" onClick={props.click}>Login</button>
        </>
    )
}

export default ButtonLogin;
