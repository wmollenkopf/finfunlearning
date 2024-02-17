import React, { useState } from 'react';
import './Simulation.css'; // Import CSS file for styling
import Simulation1 from './Simulation1/Simulation1';
import { useNavigate } from 'react-router-dom';

const Simulation = ({ user, updateUser }) => {
  const [showSimulation1, setShowSimulation1] = useState(false);

  const handleBeginClick = () => {
    setShowSimulation1(true);
  };


// Check for user object before proceeding...
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  if (!user || !user.name) {
    return (
      <div>
        <h2>Please log in to view the Simulation.</h2>
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </div>
    );
  }

  
  return (
    <div className="simulation-container">
      {/* Left side */}
      <div className="avatar-container">
        <img src={user.avatar} alt="Avatar" className="avatar-image" />
      </div>

      {/* Right side */}
      <div className="simulation-content">
        {/* Render the button if Simulation1 is not yet shown */}
        {!showSimulation1 && (
          <div>
            <h2>Simulation 1: Your First Job!</h2>
            <p>
              In this simulation, we will walk through the steps for selecting your first job,
              opening a bank account, and even for how to set up deposits so that you can get paid!
              And afterwards, we'll go over some options for how you might want to spend your money.
            </p>
            <button className="begin-button" onClick={handleBeginClick}>
              Let's Begin
            </button>
          </div>
        )}
        {/* Render Simulation1 component if showSimulation1 is true */}
        {showSimulation1 && <Simulation1 user={user} updateUser={updateUser} />}
      </div>
    </div>
  );
};

export default Simulation;
