import React from 'react';
import './styles.css';

const Employee = ({ name, surname , job, skill}) => {
  return (
    <li
      className="Employee-item"
    >
        {name} {surname} {job} {skill}
    </li>
  );
};

Employee.propTypes = {
  name: React.PropTypes.string.isRequired,
  surname: React.PropTypes.string.isRequired,
  job : React.PropTypes.string.isRequired,
  skill: React.PropTypes.string.isRequired
  
};

export default Employee;
