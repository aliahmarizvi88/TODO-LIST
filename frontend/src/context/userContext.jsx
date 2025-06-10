import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../api/AxiosInstance';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async ({ name, email, password }) => {
    const res = await axiosInstance.post('/user/signup', {
      name,
      email,
      password,
    });
    setUser(res.data);
    return res.data;
  };

  const login = async ({ email, password }) => {
    const res = await axiosInstance.post('/user/login', {
      email,
      password,
    });
    setUser(res.data);
    return res.data;
  };

  const logout = async () => {
    await axiosInstance.post('/user/logout');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
