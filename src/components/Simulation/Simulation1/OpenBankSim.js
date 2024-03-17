import React, { useState } from 'react';
import './OpenBankSim.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

// Function to convert the username into a numeric representation
function usernameToNumber(username) {
  let sum = 0;
  for (let i = 0; i < username.length; i++) {
    sum += username.charCodeAt(i);
  }
  return sum;
}

const OpenBankSim = ({ user, updateUser }) => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  // Check for user object before proceeding...
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  // Convert the username into a numeric representation
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
        // setCurrentStep(3); // Move to the next step
        break;
      default:
        break;
    }
  };

  return (
    <div className="dialog-container">
      {/* Render avatar with border */}
      {showAvatar && (
        <div className="avatar-container">
          <div className="avatar-border">
            <img src={avatarUrl} alt="Bank Teller Avatar" className="avatar" />
          </div>
        </div>
      )}

      {/* Render dialogue based on current step */}
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
        {/* Add more dialogues for additional steps */}
      </div>

      {/* Render dialogue options based on current step */}
      <div className="options-container">
        {currentStep === 1 && (
          <div>
            <div className="option" onClick={() => handleOptionClick('Option 1')}>
              Show ID and documents
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <div className="option" onClick={() => handleOptionClick('Option 1')}>
              100% of paycheck
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 2')}>
              50% of paycheck
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 3')}>
              25% of paycheck
            </div>
          </div>
        )}
        {/* Add more options for additional steps */}
      </div>
    </div>
  );
};

export default OpenBankSim;