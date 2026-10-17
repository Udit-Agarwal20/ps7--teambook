import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="not-found-container">
      <h2>Page not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn-link">Back to Home</Link>
    </div>
  );
}

export default NotFound;
