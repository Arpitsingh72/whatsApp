

import React, { useEffect, useState } from 'react';
import { getProfile } from '../../api/authApi';
import { useAuth } from '../../hooks/useAuth';
import { showError } from '../../services/toastService';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { token, setToken } = useAuth();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  console.log(profile,"profile")
  useEffect(() => {
    if (!token) return;
    getProfile(token)
      .then((data) => {
        setProfile(data);
        navigate('/chat'); 
      })
      .catch((err) => {
        showError(err.message);
        setToken(null);
        navigate('/login');
      });
  }, [token, navigate, setToken]);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="profile-container">
      <h2>Welcome, {profile.username || profile.phone}</h2>
      <p>ID: {profile.id}</p>
    </div>
  );
};

export default UserProfile;
