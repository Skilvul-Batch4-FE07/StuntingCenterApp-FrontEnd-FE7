import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initially, no user is logged in

  // Function to handle login
  const login = (userData) => {
    // Assuming the userData parameter contains the user's information
    setUser(userData);
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
  };

  // Value object to be provided by the AuthContext
  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
