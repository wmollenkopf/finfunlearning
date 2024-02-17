// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
	// Check for user object before proceeding...
	if (!user) {return (<div><h2>Please log in to view the Dashboard.</h2></div>);}
  
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p><img src={user.avatar} alt="Avatar" style={{ borderRadius: '50%', width: '200px', height: '200px' }} /></p>
      {/* <p>Email: {user.email}</p> */}
      {/* <p>Type: {user.type}</p> */}
      {/* Display additional user data as needed */}
      <p><Link to="/simulation" className="btn btn-primary">Start Simulation</Link></p>
    </div>
  );
};

export default Dashboard;
