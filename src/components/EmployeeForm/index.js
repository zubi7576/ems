import React from 'react';
import './styles.css';
import { reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please provide a name';
  }

  if (!values.surname) {
    errors.surname = 'Please provide a surname';
  }

  return errors;
}

const EmployeeForm = ({ addEmployee, fields: { name, surname, job, skill}, handleSubmit }) => {
  return (
    <div className="col-md-6">
    <form
      className="EmployeeForm-form"
      onSubmit={handleSubmit(addEmployee)}
    >
    
        <input
          type="text"
          placeholder="First Name"
          className="form-control m-2"
          {...name}
        />
        {name.touched && name.error && <div className="EmployeeForm-error">{name.error}</div>}
      
      
        <input
          type="text"
          placeholder="Last Name"
          className="form-control m-2"
          {...surname}
        />
        {surname.touched && surname.error && <div className="EmployeeForm-error">{surname.error}</div>} 

        <input type="text" className="form-control m-2" placeholder="Job Description" {...job}></input>
        {job.touched && job.error &&<div className="EmployeeForm-error">{job.error}</div>}      

        <input type="text" className="form-control m-2" placeholder="Skills" {...skill}></input> 
        {skill.touched && skill.error &&<div className="EmployeeForm-error">{skill.error}</div>}
      
      <button
        type="submit"
        className="EmployeeForm-button btn btn-primary"
      >
        Add Record
      </button>
    </form>
    </div>
  );
}

export default reduxForm({
  form: 'employee',
  fields: ['name', 'surname','job','skill'],
  validate,
})(EmployeeForm);
