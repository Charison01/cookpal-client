import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext("");

export const useAppContext = () => useContext(AppContext);

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("https://cookpal.up.railway.app/me");
        const data = await response.json();
        setUser(data);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const context = {
    user,
    setUser,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
