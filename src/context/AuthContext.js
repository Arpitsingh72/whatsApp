
import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token && typeof token === 'string') {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded.user); // assuming your backend encodes { user: {...} }
      } catch (err) {
        console.error('Failed to decode token:', err);
        setUser(null);
        saveToken(null); // clear invalid token
      }
    } else {
      setUser(null);
    }
  }, [token]);

  const saveToken = (t) => {
    setToken(t);
    if (t) localStorage.setItem('token', t);
    else localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, setToken: saveToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};
