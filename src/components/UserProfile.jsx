// import React, { useState, useEffect } from 'react';
// import Spinner from './Spinner';
// import Alert from './Alert';

// const UserProfile = ({ token, onLogout }) => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch('http://localhost:5001/api/profile', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.message || 'Could not fetch profile.');
//         }

//         setProfile(data);
//       } catch (err) {
//         setError(err.message);
//         if (err.message === 'Token is not valid') {
//           onLogout();
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (token) {
//       fetchProfile();
//     }
//   }, [token, onLogout]);

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       {isLoading && <Spinner />}
//       {error && <Alert message={error} type="error" />}
//       {profile && (
//         <div className="profile-details">
//           <p>{profile.message}</p>
//           <p><strong>ID:</strong> {profile.id}</p>
//           <p><strong>Username:</strong> {profile.username}</p>
//         </div>
//       )}
//       <button onClick={onLogout}>Logout</button>
//     </div>
//   );
// };

// export default UserProfile;
