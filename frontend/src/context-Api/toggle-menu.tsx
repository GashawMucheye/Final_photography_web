import React, { useState, useContext, createContext } from 'react';

// Define the shape of your context data
export interface MyContextType {
  openMenu: boolean;
  toggleMenu: () => void;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value of `undefined`
const MyContext = createContext<MyContextType | undefined>(undefined);

// Custom hook to use the context
export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

// Context provider component
export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  // Toggle function for openMenu
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <MyContext.Provider value={{ openMenu, setOpenMenu, toggleMenu }}>
      {children}
    </MyContext.Provider>
  );
};
