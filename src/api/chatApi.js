const API_URL = 'http://localhost:8000/api/chat';

export const getUsers = async (token) => {
  const res = await fetch(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const getMessages = async (userId, token) => {
  const res = await fetch(`${API_URL}/messages/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const sendMessage = async (payload, token) => {
  const res = await fetch(`${API_URL}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  return res.json();
};
