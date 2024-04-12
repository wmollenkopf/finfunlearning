import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Simulation from './components/Simulation/Simulation'; // Import the Simulation component
import NavBar from './components/NavBar';

// Example user data
const users = [
  { username: 'user1', email: 'user1@example.com', password: 'password1', name: 'William' },
  { username: 'user2', email: 'user2@example.com', password: 'password2', name: 'Sierra' },
  { username: 'user3', email: 'user3@example.com', password: 'password3', name: 'Brady' },
];

const generateAvatar = () => {
  // Generate a random seed for the avatar
  const seed = Math.random().toString(36).substring(7);
  // Return the URL for the avatar image using https
  const url = `https://robohash.org/${seed}.png?set=set1&size=200x200`;
  // console.log(url);
  return url;
};


const App = () => {
  const [user, setUser] = useState(); // Ensure user object has a job attribute

  useEffect(() => {
    if (user && !user.avatar) {
      // Generate a random avatar for the user only once after login
      const avatar = generateAvatar();
      setUser({ ...user, avatar });
    }
  }, [user]);
  

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const handleLogout = () => {
    // Clear the user data upon logout
    console.log("Logout triggered...");
    setUser(null);
  };

  return (
    <Router>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className="container mt-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/simulation" element={<Simulation user={user} updateUser={updateUser} />} />
          <Route path="/login" element={<Login users={users} updateUser={updateUser} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
