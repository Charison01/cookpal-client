import { createContext, useContext, useState, useEffect } from "react";
import { decryptUserId } from "../lib";
const SECRETKEY = process.env.REACT_APP_SECRET_KEY;
const AppContext = createContext("");

export const useAppContext = () => useContext(AppContext);
let userId;
export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token_session = window.localStorage.getItem("_react_auth_token_");
      if (token_session) {
        userId = decryptUserId(token_session, SECRETKEY);
      }
      if (!user && userId) {
        try {
          (async () => {
            const response = await fetch(
              `https://cookingpal.up.railway.app/users/${userId}`
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
  const getAuthStatus = () => {
    return {
      isAuthenticated: !!user, 
      userId: userId || null,
    };
  };

  const context = {
    user,
    setUser,
    getAuthStatus
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
