import React, { useState } from 'react';
import './Simulation3.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import pieChartImage from './budget_pie.png';

const Simulation3 = ({ user, updateUser}) => {

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
    <div className="simulation3-container">
    <h2>Simulation 3: Better Budgetting</h2>
    <div>
        <p>Now that you have a job, a bank account setup, and direct deposit setup...</p>
        <p>Let's review some budget rules, the most commonly used one is the 50/30/20 Rule.</p>
        {/* Pie Chart */}
        {/* <div className="pie-chart">
          <div className="slice slice-50"></div>
          <div className="slice slice-30"></div>
          <div className="slice slice-20"></div>
        </div> */}
      <div className="pie-chart-container">
        <div className="left-text">
          <p>50% Needs</p>
          <ul className="custom-list">
            <li>• Housing</li>
            <li>• Food</li>
            <li>• Health Care</li>
            <li>• Insurance</li>
          </ul>
        </div>
        <img src={pieChartImage} alt="Pie Chart" className="pie-chart-image" />
        <div className="right-text">
          <p>20% Savings</p>
          <ul className="custom-list">
            <li>• Emergencies</li>
            <li>• Savings</li>
            <li>• 401k</li>
            <li>• Investments (stocks, cryptocurrencies, etc.)</li>
          </ul>
        </div>
      </div>
      <div className="bottom-text">
        <p>30% Wants</p>
        <ul className="custom-list">
          <li>• Personal Care</li>
          <li>• Entertainment</li>
          <li>• Hobbies</li>
          <li>• Subscriptions</li>
        </ul>
      </div>
      <div>
      <p>Let's break down a bit what each means...</p>
      <p><strong>50% Needs:</strong> These are the things you need to have. There will be times where the cost of your needs won't be able to accounted for with just your paycheck, but that will change over time. Just know that your needs are the most important thing and require the most priority.</p>
      <p><strong>30% Wants:</strong> These are things that are things you want to have, like special care for yourself, entertainment and hobbies. You don't need them to live necessarily, but at times it might feel like that. It's important to treat yourself, but to carefully budget it as well.</p>
      <p><strong>20% Savings:</strong> And last, but not least, are your savings. Savings start small, and build up slowly over time. It's easy to push aside savings and instead push into your Needs and Wants, but it's critical to put money away into savings. If you ever get badly sick, if your car breaks down, and for a variety of other situations it's important to have money you can access and use to keep you floating. Otherwise you may risk not being able to repair your car for example, which may lead you to losing your job. It can spiral out of control rather quickly so it's important to be mindful of how important Savings really are.</p>
      </div>
      
        {/* <button className="next-button" onClick={handleBeginSim3Click}> */}
        <button className="next-button">
          End
        </button>
      </div>
  </div>
);
};

export default Simulation3;
