import React, { useState, useEffect } from "react";

export default function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const userId = sessionStorage.getItem("user_id");
  useEffect(() => {
    if (userId) {
      try {
        (async () => {
          const response = await fetch(
            `https://cookpal.up.railway.app/user/${userId}/recipes`
          );
          if (response.ok) {
            const data = await response.json();
            setMyRecipes(data);
            console.log(data);
          }
        })();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return <section>MyRecipes</section>;
}
