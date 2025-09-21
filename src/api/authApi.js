const API_URL = 'http://localhost:8000/api';

/**
 * POST /login
 */
export const login = async (credentials) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return res.json().then((data) => {
    if (!res.ok) throw new Error(data.message || 'Login failed');
    return data;
  });
};


export const requestOtp = async (payload) => {
  const res = await fetch(`${API_URL}/register/request-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), // { name, phone }
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to request OTP');
  return data;
};

export const verifyOtp = async (payload) => {
  const res = await fetch(`${API_URL}/register/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), // { phone, otp }
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'OTP verification failed');
  return data;
};

/**
 * POST /register
 */
export const register = async (credentials) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return res.json().then((data) => {
    if (!res.ok) throw new Error(data.message || 'Registration failed');
    return data;
  });
};

/**
 * GET /profile
 */
export const getProfile = async (token) => {
  const res = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json().then((data) => {
    if (!res.ok) throw new Error(data.message || 'Failed to fetch profile');
    return data;
  });
};
