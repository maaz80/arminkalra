"use client";

import React, { useState, useEffect } from "react";
import UserLoginForm from "./UserLoginForm";

export default function UserAuthGuard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);

  const checkAuthToken = () => {
    const token = localStorage.getItem("user_access_token");
    const expiresAt = localStorage.getItem("user_access_expires_at");

    if (token && expiresAt) {
      const now = Date.now();
      const expTime = parseInt(expiresAt, 10);

      // Check if 24 hours (1 day) have passed
      if (isNaN(expTime) || now > expTime) {
        // Token expired after 24 hours -> Auto logout!
        localStorage.removeItem("user_access_token");
        localStorage.removeItem("user_access_expires_at");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    checkAuthToken();

    // Check periodically every minute for 24h expiration
    const interval = setInterval(() => {
      checkAuthToken();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  // Prevent flash before hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-white">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <UserLoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return children;
}
