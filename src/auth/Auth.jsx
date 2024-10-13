import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true' // Cek status login di localStorage
  );
//   const [token, setToken] = useState(null);

  const login = (jwtToken) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); 
    // setToken(jwtToken);
  };

  const logout = () => {
    setIsLoggedIn(false);
    // setToken(null);
  };

  const value = {
    isLoggedIn,
    // token,
    login,
    logout,
  };
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    if (storedLoginStatus) {
      setIsLoggedIn(true);
    }
  }, []);
  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthContext, AuthProvider };