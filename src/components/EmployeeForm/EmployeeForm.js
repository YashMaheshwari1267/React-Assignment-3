import React, {useState} from 'react';
import './EmployeeForm.css';


const EmployeeForm = React.memo(props => {
    
const [enteredName, setEnteredName] = useState('');
const [enteredJob, setEnteredJob] = useState('');

const addEmployeeHandler = event => {
    event.preventDefault();
    props.onAddEmployee({name: enteredName, job: enteredJob});
}

const style = { 
    fontWeight: 'bold',
    paddingLeft: '10px'
  }

return (
    
    <form onSubmit={addEmployeeHandler}>
        <h2>Add New Employees</h2>
        
        <label htmlFor='name'> Name </label>
        <input type="text" style={style} id='name' name="name" 
          value={enteredName} 
          onChange={event => { 
              setEnteredName(event.target.value);    
            }} 
        />
        
        <label htmlFor='job'>Job</label>
        <input type="text" style={style} id='name' name="job" 
          value={enteredJob} 
          onChange={event => {
              setEnteredJob(event.target.value);
          }} 
        />
        
        <button type="submit" value="Submit"> Submit </button>
      </form>
    )
});

export default EmployeeForm;