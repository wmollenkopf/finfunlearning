// src/components/Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <p>Type: {user.type}</p>
      {/* Display additional user data as needed */}
    </div>
  );
};

export default Dashboard;
