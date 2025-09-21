import { createContext, useState, useEffect } from 'react';
import { getToken, removeToken, saveToken } from '../services/authServices.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(getToken());
  const [user, setUser] = useState(null);

  const setToken = (token) => {
    setTokenState(token);
    token ? saveToken(token) : removeToken();
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
