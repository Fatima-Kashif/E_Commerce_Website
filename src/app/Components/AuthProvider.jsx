"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("furniro_user");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch {}
    }
    setIsLoaded(true);
  }, []);

  const signIn = (userData) => {
    localStorage.setItem("furniro_user", JSON.stringify(userData));
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem("furniro_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoaded, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}