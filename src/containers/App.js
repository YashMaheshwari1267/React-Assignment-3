import React from 'react';
import './App.css';
import Employee from './components/Employee/Employee';

const App = props => {
    return (
    <div>
      <p>Add an employee with a name and a job to the table</p>
      <Employee />  
    </div>
    )
}

export default App;
