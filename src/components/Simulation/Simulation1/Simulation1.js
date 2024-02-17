import React, { useState } from 'react';
import './Simulation1.css'; // Import CSS file for styling
import jobs from './jobs'; // Import the jobs constant
import { useNavigate } from 'react-router-dom';
import OpenBankAcct from './OpenBankAcct'; // Import the OpenBankAcct component

const Simulation1 = ({ user, updateUser }) => {


  const [selectedJob, setSelectedJob] = useState(null);
  const [showOpenBankAcct, setShowOpenBankAcct] = useState(false);

  const handleJobClick = (job) => {
    // Update user object with selected job
    const updatedUser = { ...user, job: job };
    updateUser(updatedUser);
    setSelectedJob(job.title);
  };

  const handleOpenBankAcctClick = () => {
    // Navigate to the OpenBankAcct component and pass the user object as a prop
    setShowOpenBankAcct(true);
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
    <div className="simulation1-container">
      {/* Add content for Simulation 1 */}
      <h2>Simulation 1: Your First Job!</h2>
      {showOpenBankAcct ? (
        <OpenBankAcct user={user} updateUser={updateUser} />
      ) : user.job ? (
        // Placeholder text when a job is selected
        <div>
          <p>You selected: {user.job.title}</p>
          <p>Your starting pay is: ${user.job.pay}</p>
          <p>Next, let's review the steps necessary for opening a bank account.</p>
          {/* Next button */}
          <button className="next-button" onClick={handleOpenBankAcctClick}>
            Next
          </button>
        </div>
      ) : (
        // Render the job list if no job is selected
<div className="job-list">
  {jobs.map((job, index) => (
    <div
      key={index}
      className="job-item"
      onClick={() => handleJobClick(job)}
    >
      {/* Render job title, description, and image */}
      <h3>{job.title} @ ${job.pay}</h3>
      <p>{job.description}</p>
      <img src={job.image} alt={job.title} className="job-image" />
    </div>
  ))}
</div>
      )}
    </div>
  );
};

export default Simulation1;
