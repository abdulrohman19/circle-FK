import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  // Define state for username and password
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display the username and password for now (this is where authentication logic would go)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
