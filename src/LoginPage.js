import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(credentials);
  //   // Here you should add your authentication logic and navigate accordingly
  //   // For demonstration, let's just navigate to a "/dashboard" (which you need to set up)
  //   navigate('/dashboard', { state: { role: credentials.role } });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    // Here you would add your authentication logic

    // Navigate based on the selected role
    if (credentials.role === 'InvTeam') {
      navigate('/inventorydashboard'); // Navigate to Inventory Dashboard
    } else if (credentials.role === 'DLTeam') {
      navigate('/deliverydashboard'); // Replace with the correct path for the Delivery Team Dashboard
    } else {
      // Handle any other cases or set a default navigation
    }
  };

  return (
    <div className="login-container">
      <h2>DlVery</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username/Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role</label>
          <select name="role" value={credentials.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="InvTeam">Inventory Team</option>
            <option value="DLTeam">Delivery Team</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      <a href="/forgot-password">Forgot password?</a>
    </div>
  );
}

export default LoginPage