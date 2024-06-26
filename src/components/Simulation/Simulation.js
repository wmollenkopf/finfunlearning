import React, { useState } from 'react';
import './Simulation.css';
import Simulation1 from './Simulation1/Simulation1';
import Simulation2 from './Simulation2/Simulation2';
import Simulation3 from './Simulation3/Simulation3';

import { useNavigate } from 'react-router-dom';

const Simulation = ({ user, updateUser }) => {
  const [showSimulation1, setShowSimulation1] = useState(false);
  const [showSimulation2, setShowSimulation2] = useState(false);
  const [showSimulation3, setShowSimulation3] = useState(false);

  const handleBeginSim1Click = () => {
    setShowSimulation1(true);
    setShowSimulation2(false);
    setShowSimulation3(false);
  };

  const handleBeginSim2Click = () => {
    setShowSimulation1(false);
    setShowSimulation2(true);
    setShowSimulation3(false);
  };

  const handleBeginSim3Click = () => {
    setShowSimulation1(false);
    setShowSimulation2(false);
    setShowSimulation3(true);
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
        <strong>{user.name}</strong>
        {/* Display job details if user has a job */}
        {user.job && (
          <div>
            <strong>Job: </strong>{user.job.title}
            <p><strong>Pay: </strong>{`$${user.job.pay} per hour`}</p>
          </div>
        )}
      </div>

      {/* Right side */}
      <div className="simulation-content">
        {(!showSimulation1 && !showSimulation2 && !showSimulation3) && (
          <div>
            <h2>Simulation 1: Your First Job!</h2>
            <p>
              In this simulation, we will walk through the steps for selecting your first job,
              opening a bank account, and even for how to set up deposits so that you can get paid!
              And afterwards, we'll go over some options for how you might want to spend your money.
            </p>
            <button className="begin-button" onClick={handleBeginSim1Click}>
              Let's Begin
            </button>
          </div>
        )}
        {/* Render Simulation1 component if showSimulation1 is true */}
        {showSimulation1 && <Simulation1 user={user} updateUser={updateUser} handleBeginSim2Click={handleBeginSim2Click} />}
        {showSimulation2 && <Simulation2 user={user} updateUser={updateUser} handleBeginSim3Click={handleBeginSim3Click} />}
        {showSimulation3 && <Simulation3 user={user} updateUser={updateUser} />}
      </div>
    </div>
  );
};

export default Simulation;
