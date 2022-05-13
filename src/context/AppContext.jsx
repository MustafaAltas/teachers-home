import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [forSideBarIsOpen, setForSideBarIsOpen] = useState(true);
  const [curretTeacher, setCurrentTeacher] = useState();
  return (
    <AppContext.Provider
      value={{
        forSideBarIsOpen,
        setForSideBarIsOpen,
        setCurrentTeacher,
        curretTeacher,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
