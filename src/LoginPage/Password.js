import React from 'react'

function Password(props) {
    return (
       <>
       <div className="form-group">
        <label for="inputPass">Password</label>
       <input type="passward" id="inputPass" className="form-control" placeholder="Enter the name" onChange={props.changePass} value={props.upass} />
       </div>
       </>
    )
}

export default Password;
