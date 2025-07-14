import { createContext, useState } from 'react';

export const UserContext = createContext();

// Provider
  const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // por defecto en true

  const logout = () => setToken(false);
  const login = () => setToken(true);

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

