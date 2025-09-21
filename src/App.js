import React from 'react';
import AuthPage from './pages/AuthPage';
import UserProfile from './components/user/UserProfile';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { Toaster } from 'react-hot-toast';
import './styles/styles.scss';

const AppContent = () => {
  const { token } = useAuth();
  return (
    <div className="app-container"> {/* ✅ this applies your centering styles */}
      {token ? <UserProfile /> : <AuthPage />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <AppContent />
    </AuthProvider>
  );
}

export default App;
