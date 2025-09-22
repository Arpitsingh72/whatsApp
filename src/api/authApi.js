
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
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  return data;
};

/**
 * Step 1: Request OTP
 */
export const requestOtp = async (payload) => {
  const res = await fetch(`${API_URL}/register/request-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), // { phone }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to request OTP');
  return data;
};

/**
 * Step 2: Verify OTP
 */
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
 * Step 3: Set Password (final registration step)
 */
export const setPassword = async (payload) => {
  const res = await fetch(`${API_URL}/register/set-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), // { phone, password }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to set password');
  return data;
};

/**
 * GET /profile
 */
export const getProfile = async (token) => {
  console.log(token,"token")
  const res = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to fetch profile');
  return data;
};
