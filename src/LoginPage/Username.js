import React from 'react'

function Username(props) {
    
    return (
        <>
        <div className="form-group">
        <label for="inputEmail">Email</label>
           <input type="email" id="inputEmail" className="form-control" placeholder="Enter the name" onChange={props.change} value={props.uname} />
           </div>
          
        </>
    )
}

export default Username;
