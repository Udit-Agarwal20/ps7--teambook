import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEmployeeData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch single employee
        let employeeResponse = await fetch(`https://dummyjson.com/users/${id}`);
        if (!employeeResponse.ok) {
          throw new Error("Failed to fetch employee details");
        }
        let employeeData = await employeeResponse.json();
        setEmployee(employeeData);

        // Fetch employee todos
        let todosResponse = await fetch(`https://dummyjson.com/users/${id}/todos`);
        if (todosResponse.ok) {
          let todosData = await todosResponse.json();
          setTodos(todosData.todos || []);
        } else {
          setTodos([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployeeData();
  }, [id]);

  if (loading) {
    return (
      <div className="employee-details-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error || !employee) {
    return (
      <div className="employee-details-container">
        <h2 className="error-message">Error: {error || "Employee not found"}</h2>
        <Link to="/employees" className="back-link">
          Back to Employees
        </Link>
      </div>
    );
  }

  return (
    <div className="employee-details-container">
      <Link to="/employees" className="back-link">
        ← Back to Employees
      </Link>

      <div className="employee-details-card">
        <img
          src={employee.image}
          alt={`${employee.firstName} ${employee.lastName}`}
          className="details-image"
        />

        <h2>{employee.firstName} {employee.lastName}</h2>

        <div className="details-info">
          <p><strong>Age:</strong> {employee.age}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>City:</strong> {employee.address ? employee.address.city : "N/A"}</p>
          <p><strong>Company:</strong> {employee.company ? employee.company.name : "N/A"}</p>
          <p><strong>Department:</strong> {employee.company ? employee.company.department : "N/A"}</p>
          <p><strong>Job Title:</strong> {employee.company ? employee.company.title : "N/A"}</p>
        </div>
      </div>

      <div className="employee-tasks-section">
        <h3>Tasks</h3>
        {todos.length === 0 ? (
          <p className="no-tasks">No tasks found</p>
        ) : (
          <ul className="tasks-list">
            {todos.map((item) => {
              return (
                <li key={item.id} className="task-item">
                  <span className="task-text">{item.todo}</span>
                  <span
                    className={
                      item.completed ? "task-status done" : "task-status pending"
                    }
                  >
                    {item.completed ? "Done" : "Pending"}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EmployeeDetails;
