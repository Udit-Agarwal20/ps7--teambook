import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Employees from './components/Employees';
import EmployeeDetails from './components/EmployeeDetails';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
