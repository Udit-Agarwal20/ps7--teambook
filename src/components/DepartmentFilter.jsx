function DepartmentFilter({ department, setDepartment, departments }) {
  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      className="department-select"
    >
      <option value="all">All Departments</option>
      {departments.map((dept) => {
        return (
          <option key={dept} value={dept}>
            {dept}
          </option>
        );
      })}
    </select>
  );
}

export default DepartmentFilter;
