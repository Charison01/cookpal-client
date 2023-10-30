import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext("");

export const useAppContext = () => useContext(AppContext);

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //fetch /me
  }, []);

  const context = {
    user,
    setUser,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
