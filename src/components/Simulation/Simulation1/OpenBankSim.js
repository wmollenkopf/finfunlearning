import React, { useState } from 'react';
import './OpenBankSim.css';
import { useNavigate } from 'react-router-dom';

// Converts the username into a numeric representation
// Used for creating an avatar at random later
function usernameToNumber(username) {
  let sum = 0;
  for (let i = 0; i < username.length; i++) {
    sum += username.charCodeAt(i);
  }
  return sum;
}



const OpenBankSim = ({ user, updateUser, handleBeginSim2Click }) => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  // Check for user object before proceeding...
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSetBankAcctNum = (user) => {
    // Generate a random 10-digit number inline
    const randomNum = Math.floor(1000000000 + Math.random() * 9000000000);
    const randomBankAcctNum = randomNum.toString().substring(0, 10);
    
    // Update user object with the generated random bank account number
    const updatedUser = { ...user, bankacct: randomBankAcctNum };
    updateUser(updatedUser);
    console.log(user);
    handleBeginSim2Click();
  };

  // Convert the username into a numeric form...
  const usernameNumeric = user ? usernameToNumber(user.username) : '';

  // Return the URL for the avatar image using https
  const avatarUrl = `https://robohash.org/${usernameNumeric}.png?set=set1&size=200x200`;


  const handleOptionClick = (option) => {
    // Handle user selection based on the current step
    switch (currentStep) {
      case 1:
        console.log('Entering bank...');
        console.log('Teller asks for ID and documents...');
        setCurrentStep(2); // Move to the next step
        break;
      case 2:
        console.log(`Selected deposit option: ${option}`);
        console.log('Teller proceeds with account opening...');
        setCurrentStep(3); // Move to the next step
      case 3:
          console.log(`Selected paycheck deposit percentage option: ${option}`);
          console.log('Let\'s review and sign...');
          // setCurrentStep(3); // Move to the next step
        break;
      default:
        break;
    }
  };

  return (
    <div className="dialog-container">
      {showAvatar && (
        <div className="avatar-container">
          <div className="avatar-border">
            <img src={avatarUrl} alt="Bank Teller Avatar" className="avatar" />
          </div>
        </div>
      )}
      <div className="dialog-prompt">
        {currentStep === 1 && (
          <div>
          <p>*You enter the bank and approach the teller*</p>
          <p>Teller: "Hello, I hear you're interested in opening an account with us today. Can you please hand over your ID and documents"</p>
          </div>
        )}
        {currentStep === 2 && (
          <div>
          <p>(The Teller is waiting for your deposit amount...)</p>
          <p>How much do you wish to deposit up front from your first paycheck?</p>
          </div>
        )}
        {currentStep === 3 && (
          <div>
          <p>Thank you for setting up your account. Please review the the terms and sign.</p>
          <p>Also, please make yourself familiar with the fees associated with having an account here.</p>
          <p><a href="#" className="no-underline-link">📜 Fee Schedule</a></p>
          </div>
        )}
      </div>
      <div className="options-container">
        {currentStep === 1 && (
          <div>
            <div className="option" onClick={() => handleOptionClick('Option 1')}>
              📄 Show ID and documents
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <div className="option" onClick={() => handleOptionClick('Option 1')}>
              <strong>100%</strong> of paycheck
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 2')}>
              <strong>50%</strong> of paycheck
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 3')}>
              <strong>25%</strong> of paycheck
            </div>
          </div>
        )}
        {currentStep=== 3 && (
          <div>
            <div className="option" onClick={() => handleOptionClick('Option 1')}>
              🤔 Ask Questions
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 2')}>
              🥸 Review Fee Schedule
            </div>
            <div className="option" onClick={() => handleSetBankAcctNum(user)}>
              ✒️ Agree And Sign
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenBankSim;
