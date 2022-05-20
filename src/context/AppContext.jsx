import { createContext, useEffect, useState } from "react";
import { teacherFullName } from "../firebase/Firebase";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [forSideBarIsOpen, setForSideBarIsOpen] = useState(true);
  const [currentTeacher, setCurrentTeacher] = useState();
  useEffect(() => {
    teacherFullName(setCurrentTeacher);
  }, []);
  return (
    <AppContext.Provider
      value={{
        forSideBarIsOpen,
        setForSideBarIsOpen,
        setCurrentTeacher,
        currentTeacher,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
