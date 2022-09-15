import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(1) 
  const [userInfo, setUserInfo] = useState({username:'', token: ''})
  const [isAuthentified, setIsAuthentified] = useState(false);
  const [userToken, setUserToken] = useState('')
  const client = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Authorization': `Basic ${userToken}`
    }
  })

  const contextValue = {
    isAuthentified,
    setIsAuthentified,
    client,
    setUserInfo,
    idUser
  };

  return (
      <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};