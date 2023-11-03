import { createContext, useContext, useState, useEffect } from "react";
import { AES } from "crypto-js";
import { decryptUserId } from "../lib";

const AppContext = createContext("");

export const useAppContext = () => useContext(AppContext);

export default function ContextProvider({ children }) {
  const SECRETKEY = process.env.REACT_APP_SECRET_KEY
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token_session = window.localStorage.getItem
      const userId = window.sessionStorage.getItem("user_id");
      if (!user && userId) {
        try {
          (async () => {
            const response = await fetch(
              `https://cookpal.up.railway.app/users/${userId}`
            );
            if (response.ok) {
              const data = await response.json();
              setUser(data);
            } else {
              console.log("No logged in user found");
            }
          })();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, [user]);

  const context = {
    user,
    setUser,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
