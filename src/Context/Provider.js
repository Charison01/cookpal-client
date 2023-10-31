import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext("");

export const useAppContext = () => useContext(AppContext);

export default function ContextProvider({ children }) {

  const defaultUser = {
    name: "",
    picture: ""
  }
  const [user, setUser] = useState(defaultUser);

  // useEffect(() => {
  //   //fetch /me
  // }, []);
  useEffect(() => {
    // fetch user data when component is mounted
    fetch("https://cookpal.up.railway.app/me")
    .then((response) => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error("Failed to fetch user data");
      }
    })
    .then((data) => {
      setUser(data);
    })
    .catch((error) => {
      console.error(error);
    });
  },[]);

  const context = {
    user,
    setUser,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
