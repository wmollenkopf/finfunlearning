// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const user = users.find(user => user.username === username);
    
    if (user) {
      // Append user with userType
      const updatedUser = { ...user, type: userType };
      // Update the user in the parent component
      updateUser(updatedUser);
      setError('');
      // Navigate to the dashboard route
      navigate('/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
      {userType === '' ? (
        <div>
          <h2>Select User Type</h2>
          <button onClick={() => handleUserTypeSelection('student')}>Student</button>
          <button onClick={() => handleUserTypeSelection('school')}>School</button>
        </div>
      ) : (
        <div>
          <h2>{userType === 'student' ? 'Student Login' : 'School Login'}</h2>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
