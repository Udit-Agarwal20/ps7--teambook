# PS7: TeamBook

TeamBook is a beginner-friendly employee directory web application built with React and Vite. It allows users to browse employee profiles, search by name, filter by department, and view detailed information including individual tasks.

## Live Deployed Link

- [Live Demo](https://your-deployment-link.vercel.app) *(Replace with your deployed Vercel URL)*

## API Used

- **API**: DummyJSON Users API
- **Main Endpoints**:
  - All Employees: `https://dummyjson.com/users?limit=30`
  - Single Employee: `https://dummyjson.com/users/{id}`
  - Employee Tasks: `https://dummyjson.com/users/{id}/todos`

## Routes

- `/` — Home page with a welcome banner and quick link to explore the team.
- `/employees` — Employee directory page displaying all employees with search and department filtering.
- `/employees/:id` — Employee details page displaying profile details and task checklist.
- `*` — 404 Not Found page with a link back to Home.

## Features

- **Employee List**: Fetches and renders 30 employee cards from the DummyJSON API.
- **Search**: Real-time, case-insensitive search by employee full name.
- **Department Filter**: Controlled dropdown dynamically populated from available employee departments.
- **Combined Filtering**: Search and department filter work seamlessly together with dynamic employee count.
- **Employee Details**: View complete employee profile information (excluding sensitive fields like passwords, SSNs, or banking data).
- **Employee Tasks**: Displays assigned tasks with Done / Pending status badges, or an empty state if no tasks exist.
- **Loading & Error Handling**: Displays user-friendly messages during data fetching or API failures.
- **Responsive Card Grid**: Clean, mobile-friendly grid layout adapting across different screen sizes.

## Screenshots

### 1. Employee Directory
<!-- Add screenshot here -->
`![Employee Directory Screenshot](./screenshots/directory.png)`

### 2. Employee Details & Tasks
<!-- Add screenshot here -->
`![Employee Details Screenshot](./screenshots/details.png)`

## Getting Started

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
