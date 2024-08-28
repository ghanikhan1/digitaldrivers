// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track if authenticated
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth');
        if (response.status === 200) {
          // If authentication is successful
          setIsAuthenticated(true);
        } else {
          // If authentication fails, set it to false
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false); // Loading is complete
      }
    }

    checkAuth();
  }, []);

  if (isLoading) {
    // While loading, display nothing or a loading spinner
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // If not authenticated, display nothing or a message
    return null; // Optionally, display an error message here instead
  }

  // If authenticated, render the app
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

