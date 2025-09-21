import React, { useState } from 'react';
import Spinner from '../common/Spinner';
import { showError } from '../../services/toastService';

const AuthForm = ({ isLogin, onSubmit, isLoading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      showError('Please enter both username and password');
      return;
    }
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="AuthForm-input-box">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="AuthForm-input-box">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? <Spinner /> : isLogin ? 'Sign in' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
