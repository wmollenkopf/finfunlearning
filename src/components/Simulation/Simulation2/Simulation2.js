import React, { useState } from 'react';
import './Simulation2.css'; 
import { useNavigate } from 'react-router-dom';

const Simulation2 = ({ user, updateUser, handleBeginSim3Click }) => {

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
    <div className="simulation2-container">
    <h2>Simulation 2: Setting Up Direct Deposit</h2>
    <div>
        <p>Next that you have a bank account setup, let's go about setting up your Direct Deposit....</p>
        <p>Your bank's Routing Number is: <strong>13374242</strong></p>
        <p>Your bank Account Number is: <strong>39834123988</strong></p>
        <p>Let's review how to setup direct deposit with your new job.</p>
        <p>First, you'll be asked by your company to enter your Account Number:</p>
        <p>Routing Number: <input type="text" value="13374242" /></p>
        <p>Account Number: <input type="text" value="39834123988" /></p>
        <p>With this information provided to your new employeer, your paychecks will automatically be deposited into your bank account without the need of cashing a check.</p>
        <button className="next-button" onClick={handleBeginSim3Click}>
          Next
        </button>
      </div>
  </div>
);
};

export default Simulation2;
