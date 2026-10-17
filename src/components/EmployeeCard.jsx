import { Link } from 'react-router';

function EmployeeCard({ employee }) {
  let fullName = employee.firstName + ' ' + employee.lastName;
  let jobTitle = employee.company ? employee.company.title : '';
  let department = employee.company ? employee.company.department : '';

  return (
    <div className="employee-card">
      <img
        src={employee.image}
        alt={fullName}
        className="employee-image"
      />
      <h3>{fullName}</h3>
      <p className="employee-title">{jobTitle}</p>
      <p className="employee-department">{department}</p>
      <Link to={`/employees/${employee.id}`} className="card-link">
        View Profile
      </Link>
    </div>
  );
}

export default EmployeeCard;
