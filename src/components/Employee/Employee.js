import React, { useState } from 'react';
import './Employee.css';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';

const Employee = (props) => {
    const [userEmploees, setUserEmployees] = useState([]);
    
    const addEmployee = emp => {
        setUserEmployees(prevEmployees => [...prevEmployees, {id: Math.random().toString(), ...emp}])
    }

    const removeEmployee = empId => {
        setUserEmployees(prevEmployees => 
            prevEmployees.filter(employee => employee.id !== empId)    
        );
    }

    return ( 
        <div className="App">   
            <EmployeeForm 
                onAddEmployee={addEmployee}
            />
        
            <table className="table">
            <thead>
                <tr>
                    <th id="Name" scope="col">Name</th>
                    <th id="Job" scope="col">Job </th>
                    <th id="Remove" scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
            <EmployeeList 
                employees={userEmploees}
                removeEmp={removeEmployee} 
            />
            </tbody>       
            </table>
        </div>
    )
}

export default Employee;