import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [user, setUser] = useState(null);

  // Fetch user data (assuming user authentication is managed by Laravel)
  useEffect(() => {
    fetch('/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Ensure token management is correct
      },
    })
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="welcome-container">
      <header>
        <h1>Welcome to Medical Plus</h1>
        {user ? (
          <p>Hello, {user.name}! You are logged in as a {user.role}.</p>
        ) : (
          <p>Welcome! Please log in or register to continue.</p>
        )}
      </header>

      <div className="content">
        <p>
          Medical Plus is your go-to platform for managing medical appointments, records, and more.
        </p>
        {user ? (
          <div>
            <h2>Your Dashboard</h2>
            <p>Access your medical records, appointment history, and more.</p>
            <Link to="/dashboard" className="btn">
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div>
            <h2>Get Started</h2>
            <p>Create an account or log in to access all features.</p>
            <Link to="/login" className="btn">Log In</Link>
            <Link to="/register" className="btn">Register</Link>
          </div>
        )}
      </div>

      <footer>
        <p>&copy; 2024 Medical Plus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
