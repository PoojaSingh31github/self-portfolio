/* eslint-disable react/prop-types */
import { useContext, useState, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error("useTheme must be used within an AppContextProvider");
  }
  return context;
};
