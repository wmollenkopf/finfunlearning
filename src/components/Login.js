// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS file for styling

const Login = ({ users, updateUser }) => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  const handleLogin = () => {
    // Check if username and password are not empty
    if (!username || !password) {
      setError('Please enter username and password.');
      return;
    }

    // Find user in the users array based on username
    const user = users.find(user => 
      user.username.toLowerCase() === username.toLowerCase() ||
      user.email.toLowerCase() === username.toLowerCase()
    );
    
    console.log(users);

    if (user) {
      if (user.password === password) {
        // Append user with userType (ensure userType is defined)
        const updatedUser = { ...user, type: userType || '' };
        // Update the user in the parent component
        updateUser(updatedUser);
        setError('');
        // Navigate to the dashboard route (ensure navigate function is correctly imported)
        navigate('/dashboard');
      }
      else {
        setError('Invalid username or password.');
      }
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
      {userType === '' ? (
        <div>
          <h2>Select User Type</h2>
          <div className="button-container">
           <button className="student-button" onClick={() => handleUserTypeSelection('student')}>Student</button>
            <button className="school-button" onClick={() => handleUserTypeSelection('school')}>School</button>
          </div>
        </div>
      ) : (
        <div className="login-container">
        <h2>{userType === 'student' ? 'Student Login' : 'School Login'}</h2>
        <div className="input-container">
          <label className="input-label">Username (user1):</label>
          <input className="input-field" type="text" value={username} onChange={(e) => setUsername(e.target.value)} maxLength={20} />
        </div>
        <div className="input-container">
          <label className="input-label">Password (password1):</label>
          <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={20} />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      )}
    </div>
  );
};

export default Login;
