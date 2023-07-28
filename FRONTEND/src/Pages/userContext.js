import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState(() => {
    // Get the user email from local storage on initial load
    return localStorage.getItem("userEmail") || "";
  });

  // Update local storage whenever the user email changes
  useEffect(() => {
    localStorage.setItem("userEmail", userEmail);
  }, [userEmail]);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
