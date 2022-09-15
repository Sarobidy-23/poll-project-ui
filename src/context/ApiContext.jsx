import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [isAuthentified, setIsAuthentified] = useState(false);

  const contextValue = {
    isAuthentified,
    setIsAuthentified
  };

  return (
      <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};