// import React, { useState } from 'react';
// import AuthForm from './components/AuthForm';
// import UserProfile from './components/UserProfile';
// import './styles/styles.scss';
// import cogoToast from 'cogo-toast';

// export default function App() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [serverMessage, setServerMessage] = useState(null);
//   const [token, setToken] = useState(null);

//   const API_URL = 'http://localhost:8000/api';

//   const handleAuthSubmit = async (formData) => {
//     const endpoint = isLogin ? '/login' : '/register';
//     setIsLoading(true);
//     setServerMessage(null);

//     try {
//       const response = await fetch(`${API_URL}${endpoint}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'An error occurred.');
//       }

//       if (isLogin) {
//         setToken(data.token);
//       } else {
//         setServerMessage({ type: 'success', text: data.message });
//         setIsLogin(true);
//       }
//     } catch (error) {
//       setServerMessage({ type: 'error', text: error.message });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     setToken(null);
//     setIsLogin(true);
//     setServerMessage(null);
//   };

//   if (token) {
//     return (
//       <div className="app-container">
//         <UserProfile token={token} onLogout={handleLogout} />
//       </div>
//     );
//   }

//   return (
//     <div className="app-container">
//       <div className="form-container">
//         <h2>{isLogin ? 'Sign in to your account' : 'Create a new account'}</h2>
//         <AuthForm
//           isLogin={isLogin}
//           onSubmit={handleAuthSubmit}
//           isLoading={isLoading}
//           serverMessage={serverMessage}
//           setServerMessage={setServerMessage}
//         />
//         <div className="toggle-container">
//           <button
//             onClick={() => {
//               setIsLogin(!isLogin);
//               setServerMessage(null);
//             }}
//           >
//             {isLogin ? 'Create a new account' : 'Already have an account? Sign in'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import UserProfile from './components/UserProfile';
import './styles/styles.scss';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);
  const [token, setToken] = useState(null);

  const API_URL = 'http://localhost:8000/api';

  const handleAuthSubmit = async (formData) => {
    const endpoint = isLogin ? '/login' : '/register';
    setIsLoading(true);
    setServerMessage(null);

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred.');
      }

      if (isLogin) {
        setToken(data.token);
      } else {
        setServerMessage({ type: 'success', text: data.message });
        setIsLogin(true); // switch to login after successful register
      }
    } catch (error) {
      setServerMessage({ type: 'error', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setIsLogin(true);
    setServerMessage(null);
  };

  if (token) {
    return (
      <div className="app-container">
        <UserProfile token={token} onLogout={handleLogout} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>{isLogin ? 'Sign in to your account' : 'Create a new account'}</h2>
        <AuthForm
          isLogin={isLogin}
          onSubmit={handleAuthSubmit}
          isLoading={isLoading}
          serverMessage={serverMessage}
          setServerMessage={setServerMessage}
        />
        <div className="toggle-container">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setServerMessage(null);
            }}
          >
            {isLogin ? 'Create a new account' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
