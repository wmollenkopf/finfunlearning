import React, { useState } from 'react';
import OpenBankSim from './OpenBankSim';

const OpenBankAcct = ({ user, updateUser, handleBeginSim2Click }) => {
  const totalSteps = 3; // Total number of steps
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // "Next" button click
  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  // "Previous" button click
  const handlePrevClick = () => {
    setCurrentStep(Math.max(currentStep - 1, 1)); // Ensure the currentStep doesn't go below 1
  };

  // State to track whether each section is expanded or not
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle the expansion state of a section
  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const [showOpenBankSim, setShowOpenBankSim] = useState(false);

  const handleOpenBankSimClick = () => {
    // Navigate to the OpenBankSim component and pass the user object as a prop
    setShowOpenBankSim(true);
  };

  return (
    <div>
      {showOpenBankSim ? (
        <OpenBankSim user={user} updateUser={updateUser} handleBeginSim2Click={handleBeginSim2Click} />
      ) : (
        <div>
          <h2>Open Bank Account</h2>
          {/* The below will render different "steps" based on the currentStep variable */}
          {currentStep === 1 && (
            <div>
              {/* Step 1 content */}
              <h3>Step 1: Determining Where To Open Your Account</h3>
              <p>
                Opening your first checking and savings account can feel overwhelming. Here's a quick guide to help you:
              </p>
              <p>
                <strong>Types of Accounts:</strong>
                <ul>
                  <li><strong>Bank:</strong> Offers various services with physical branches. Watch out for fees.</li>
                  <li><strong>Credit Union:</strong> Member-owned cooperatives often offer better rates but may have fewer branches.</li>
                  <li><strong>Online Bank:</strong> Operates online, with lower fees and higher savings rates. Check for convenience.</li>
                </ul>
              </p>
              <p>
                <strong>Key Points:</strong>
                <ul>
                  <li onClick={() => toggleSection('fees')}>
                    <strong>Fees:</strong> Look for monthly, overdraft, and ATM fees.
                    {expandedSections['fees'] ? ' ▲' : ' ▼'}
                    {expandedSections['fees'] && (
                      <ul>
                        <li>Monthly maintenance fees can add up over time.</li>
                        <li>Overdraft fees can occur if you spend more than you have in your account.</li>
                        <li>ATM fees may apply if you use ATMs outside of your bank's network.</li>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => toggleSection('interestRates')}>
                    <strong>Interest Rates:</strong> Compare savings rates.
                    {expandedSections['interestRates'] ? ' ▲' : ' ▼'}
                    {expandedSections['interestRates'] && (
                      <ul>
                        <li>Higher savings rates mean your money grows faster.</li>
                        <li>Check for special promotions or introductory rates.</li>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => toggleSection('accessibility')}>
                    <strong>Accessibility:</strong> Consider branch locations and online features.
                    {expandedSections['accessibility'] ? ' ▲' : ' ▼'}
                    {expandedSections['accessibility'] && (
                      <ul>
                        <li>Branches near your home or workplace can make banking more convenient.</li>
                        <li>Online features like mobile banking and bill pay can save time.</li>
                      </ul>
                    )}
                  </li>
                </ul>
              </p>
              <p>
                Take your time to research and find the best fit for your needs. It's an essential step towards financial independence!
              </p>
              <p>For now, let's go through the experience of setting up a checking savings account at a Credit Union as an example.</p>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              {/* Step 2 content */}
              <h3>Step 2: Opening an Account at a Credit Union</h3>
              <p>When opening an account at a credit union, you'll need to follow these steps:</p>
              <ol>
                <li>
                  <strong>Documents to Bring:</strong>
                  <ul>
                    <li>Valid government-issued photo identification (e.g., driver's license, passport)</li>
                    <li>Social Security number or Individual Taxpayer Identification Number (ITIN)</li>
                    <li>Proof of address (e.g., utility bill, lease agreement)</li>
                    <li>Additional identification or documentation may be required depending on the credit union's policies and account type (e.g., joint account holders may need to provide their information)</li>
                  </ul>
                </li>
                <li>
                  <strong>Steps to Open an Account:</strong>
                  <ol>
                    <li><strong>Research Credit Unions:</strong> Identify a credit union that suits your needs based on factors such as location, services offered, and account fees.</li>
                    <li><strong>Visit the Credit Union:</strong> Go to the nearest branch of the chosen credit union during their business hours.</li>
                    <li><strong>Speak with a Representative:</strong> Inform the representative that you want to open a new account. They will guide you through the process and provide necessary forms.</li>
                    <li><strong>Complete Application Forms:</strong> Fill out the required account opening forms accurately and completely. This may include personal information, contact details, and account preferences.</li>
                    <li><strong>Provide Documentation:</strong> Present the required documents, including identification, Social Security number, and proof of address, as requested by the credit union.</li>
                    <li><strong>Choose Account Type:</strong> Select the type of account you wish to open (e.g., checking, savings, or both) and any additional features or services you desire.</li>
                    <li><strong>Make Initial Deposit:</strong> Some credit unions may require an initial deposit to open the account. Be prepared to provide funds to establish the account.</li>
                    <li><strong>Review Terms and Conditions:</strong> Read and understand the terms and conditions associated with the account, including fees, interest rates, and account features.</li>
                    <li><strong>Sign Agreement:</strong> Sign any necessary agreements or disclosures provided by the credit union to finalize the account opening process.</li>
                    <li><strong>Receive Account Information:</strong> Once your account is opened successfully, you will receive account information, such as your account number and any relevant debit cards or checks.</li>
                  </ol>
                </li>
              </ol>
              <p>Remember, specific requirements and procedures may vary depending on the credit union's policies and the type of account you wish to open. It's always a good idea to contact the credit union directly or visit their website for detailed information tailored to your situation.</p>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              {/* Step 3 content */}
              <h3>Upwards and Onwards!</h3>
              <p>Let's give it a try shall we? Let's move onto the simulation of setting up a bank account!</p>
            </div>
          )}
          {/* Next and Previous buttons */}
          <div>
            <button className="prev-button" onClick={handlePrevClick} disabled={currentStep === 1}>
              Previous
            </button>
            {currentStep < totalSteps ? (
              <button className="next-button" onClick={handleNextClick}>
                Next
              </button>
            ) : (
              <button className="next-button" onClick={handleOpenBankSimClick}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenBankAcct;
