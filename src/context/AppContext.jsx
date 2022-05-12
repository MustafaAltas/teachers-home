import { createContext, useState } from "react";

const AppContext = createContext();

export const  AppContextProvider = ({ children }) => {
    const [forSideBarIsOpen,setForSideBarIsOpen] = useState(true)
  return (
    <AppContext.Provider value={{forSideBarIsOpen,setForSideBarIsOpen}}>
      {children}
    </AppContext.Provider>);
};

export default AppContext;
