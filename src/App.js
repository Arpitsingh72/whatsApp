
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { AuthProvider } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import UserProfile from './components/user/UserProfile';
import ChatPage from './pages/ChatPage';
import { Toaster } from 'react-hot-toast';
import './styles/styles.scss';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

function AppContent() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <PrivateRoute>
            <ChatPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
