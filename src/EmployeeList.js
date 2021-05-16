import React from 'react';
import EmpData from './DashboardPage.json';
import './App.css';
function EmployeeList(props) {

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
           {EmpData.map((empList, index) => {
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

export default EmployeeList
