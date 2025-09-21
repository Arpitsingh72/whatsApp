import React, { useState } from 'react';
import AuthForm from '../components/auth/AuthForm.jsx';
import { login, register,requestOtp, verifyOtp, } from '../api/authApi';
import { useAuth } from '../hooks/useAuth';
import { showSuccess, showError } from '../services/toastService';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useAuth();

  const handleAuthSubmit = async (credentials) => {
    setIsLoading(true);
    try {
      const data = isLogin ? await login(credentials) : await register(credentials);
      if (isLogin) {
        setToken(data.token);
        showSuccess('Login successful 🎉');
      } else {
        showSuccess(data.message || 'Registration successful 🎉');
        setIsLogin(true);
      }
    } catch (err) {
      showError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>{isLogin ? 'Sign in' : 'Register'}</h2>
        <AuthForm isLogin={isLogin} onSubmit={handleAuthSubmit} isLoading={isLoading} />
        <button className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create a new account' : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
