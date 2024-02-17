// src/App.js
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// Example user data
const users = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  // Add more users as needed
];

const test_user = users[0];

const Home = () => {
  return <h2>Home Page</h2>;
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        FinFun Learning
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  // Initialize state with test_user upon first page load
  const [user, setUser] = useState(test_user);

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          {/* Pass user and updateUser as props to the Dashboard component */}
          <Route
            path="/dashboard"
            element={<Dashboard user={user} updateUser={updateUser} />}
          />
          {/* Use the element prop to pass props to the Login component */}
          <Route path="/login" element={<Login users={users} updateUser={updateUser} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
