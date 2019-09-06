import React from 'react';
import Employee from '../Employee';
import './styles.css';

const EmployeeList = ({ employees, onAdd }) => {

  const employeeNodes = employees.map(employee => (
      <Employee
          key={employee.name + employee.surname +"   "+ employee.job + " " +employee.skill}
          {...employee}
      />
  ));

  return (
      <div>
          <ul
            className="EmployeeList"
          >
              {employeeNodes}
          </ul>

          <button
            className=" btn btn-primary EmployeeList-button"
            onClick={onAdd}
          >
            Add
          </button>
      </div>
  );
};

EmployeeList.propTypes = {
  employees: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          surname: React.PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default EmployeeList;
