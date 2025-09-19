// import React, { useState } from 'react';
// import Spinner from './Spinner';
// import Alert from './Alert';
// import cogoToast from 'cogo-toast';

// const AuthForm = ({ isLogin, onSubmit, isLoading, serverMessage, setServerMessage }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       setServerMessage({ type: 'error', text: 'Please enter both username and password.' });
//       return;
//     }
//     onSubmit({ username, password });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="auth-form">
//       <div className='AuthForm-input-box'>
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           name="username"
//           type="text"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             setServerMessage(null);
//           }}
//         />
//       </div>

//       <div className='AuthForm-input-box'>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           autoComplete={isLogin ? 'current-password' : 'new-password'}
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             setServerMessage(null);
//           }}
//         />
//       </div>

//       {/* {serverMessage && <Alert message={serverMessage.text} type={serverMessage.type} />} */}

//       <button type="submit" disabled={isLoading}>
//         {isLoading ? <Spinner /> : (isLogin ? 'Sign in' : 'Register')}
//       </button>
//     </form>
//   );
// };

// export default AuthForm;

// import React, { useState } from 'react';
// import Spinner from './Spinner';
// import Alert from './Alert';

// const AuthForm = ({ isLogin, onSubmit, isLoading, serverMessage, setServerMessage }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setServerMessage({ type: 'error', text: 'Please enter both username and password.' });
//       return;
//     }

//     onSubmit({ username, password });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="auth-form">
//       <div className="AuthForm-input-box">
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           type="text"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             setServerMessage(null);
//           }}
//         />
//       </div>

//       <div className="AuthForm-input-box">
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           autoComplete={isLogin ? 'current-password' : 'new-password'}
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             setServerMessage(null);
//           }}
//         />
//       </div>

//       {serverMessage && <Alert message={serverMessage.text} type={serverMessage.type} />}

//       <button type="submit" disabled={isLoading}>
//         {isLoading ? <Spinner /> : (isLogin ? 'Sign in' : 'Register')}
//       </button>
//     </form>
//   );
// };

// export default AuthForm;


import React, { useState } from 'react';
import Spinner from './Spinner';

const AuthForm = ({ isLogin, onSubmit, isLoading, setServerMessage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setServerMessage({ type: 'error', text: 'Please enter both username and password.' });
      return;
    }

    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="AuthForm-input-box">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setServerMessage(null);
          }}
        />
      </div>

      <div className="AuthForm-input-box">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setServerMessage(null);
          }}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? <Spinner /> : (isLogin ? 'Sign in' : 'Register')}
      </button>
    </form>
  );
};

export default AuthForm;

