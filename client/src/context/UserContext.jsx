import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false)

  const login = async (user) => {
    setUser(user);
    setLoginStatus(true)
  };

  useEffect(()=>{
    let dataUser = localStorage.getItem('dataUser');
    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('dataUser', JSON.stringify(user));
  },[user])

  const logout = () =>{
    setUser([]);
    localStorage.removeItem('dataUser');
    localStorage.removeItem('idUser');
  }

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
