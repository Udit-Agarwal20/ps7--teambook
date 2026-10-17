import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import DepartmentFilter from './DepartmentFilter';
import EmployeeCard from './EmployeeCard';

function Employees() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        setLoading(true);
        let response = await fetch("https://dummyjson.com/users?limit=30");
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        let data = await response.json();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <div className="employees-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="employees-container">
        <h2 className="error-message">Error: {error}</h2>
      </div>
    );
  }

  // Generate unique departments list using simple beginner loop
  let departments = [];
  for (let i = 0; i < users.length; i++) {
    let dept = users[i].company && users[i].company.department;
    if (dept && !departments.includes(dept)) {
      departments.push(dept);
    }
  }

  // Filter employees by full name and department
  let filteredEmployees = users.filter((employee) => {
    let fullName = (employee.firstName + " " + employee.lastName).toLowerCase();
    let matchesSearch = fullName.includes(search.toLowerCase());
    let matchesDepartment =
      department === "all" ||
      (employee.company && employee.company.department === department);

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="employees-container">
      <h2>Employee Directory</h2>

      <div className="controls-row">
        <SearchBar search={search} setSearch={setSearch} />
        <DepartmentFilter
          department={department}
          setDepartment={setDepartment}
          departments={departments}
        />
      </div>

      <h3>Employees: {filteredEmployees.length}</h3>

      {filteredEmployees.length === 0 ? (
        <p className="no-employees">No Employees Found</p>
      ) : (
        <div className="employee-grid">
          {filteredEmployees.map((employee) => {
            return (
              <EmployeeCard key={employee.id} employee={employee} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Employees;
