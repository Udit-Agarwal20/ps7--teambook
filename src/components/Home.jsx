import { Link } from 'react-router';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to TeamBook</h1>
      <p>Your company's directory to easily explore team members across all departments.</p>
      <Link to="/employees" className="btn-link">View Team</Link>
    </div>
  );
}

export default Home;
