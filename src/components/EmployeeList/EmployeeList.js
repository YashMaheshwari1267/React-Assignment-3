import React from 'react';
import './EmployeeList.css';

const EmployeeList = props => {
return (
    props.employees.map(emp => ( 
        <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.job}</td>
            <td><button onClick={props.removeEmp.bind(this,emp.id)}> Remove </button></td>
        </tr>
    )))
}
export default EmployeeList;