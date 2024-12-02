import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export  const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(window.localStorage.getItem("user") || "")
    if (user==="") {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };