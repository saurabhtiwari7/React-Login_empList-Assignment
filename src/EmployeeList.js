import React from 'react';
// import EmpData from './DashboardPage.json';
import './App.css';
import {connect} from 'react-redux'
function EmployeeList(props) {
// console.log('jhvhjv', props.empList1)

const newDataList = props.empList1;
    return (
        <div>
           <h1>Employee List</h1>
           <table className="table table-dark">
           <thead>
           <tr>
                   <th>Name</th>
                   <th>Age</th>
                   <th>Gender</th>
                   <th>Email</th>
                   <th>phone No</th>
                  

               </tr>
               </thead>
               <tbody>
           {newDataList.map((empList, index) => {
               return <>
              
             
               <tr>
               <td>{empList.name}</td>
               <td>{empList.age}</td>
               <td>{empList.gender}</td>
               <td>{empList.email}</td>
               <td>{empList.phoneNo}</td>
               </tr>
               
               </>
           })}
           </tbody>
           </table>
     
        </div>
    )
}

const mapStateToProps = (state) => {
return {

    empList1: state.map((data1) => {
        return data1
    })
   
}
}

export default connect(mapStateToProps)(EmployeeList)
