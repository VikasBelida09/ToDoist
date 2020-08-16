import React, { createContext, useContext, useState } from "react";

export const SelectedProjectContext = createContext();
export const SelectedProjectsProvider = ({ children }) => {
  const [selctedProject, setSelectedProject] = useState("INBOX");
  return (
    <SelectedProjectContext.Provider
      value={{ selctedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};
export const useSelectedProjectsValue = () => useContext(SelectedProjectContext);
