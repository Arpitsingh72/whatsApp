import React, { useEffect, useState } from 'react';
import { getProfile } from '../../api/authApi';
import { useAuth } from '../../hooks/useAuth';
import { showError, showSuccess } from '../../services/toastService';

const UserProfile = () => {
  const { token, setToken } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!token) return;
    getProfile(token)
      .then((data) => setProfile(data))
      .catch((err) => showError(err.message));
  }, [token]);

  const handleLogout = () => setToken(null);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="profile-container">
      <h2>Welcome, {profile.username}</h2>
      <p>ID: {profile.id}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
