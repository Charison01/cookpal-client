import "./App.css";
import { useState, useEffect } from "react";
import { Sidebar, Home } from "../src/Components";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  //create data in parent component
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("https://cookpal.up.railway.app/recipes");
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
        }
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);
  const recipesToRender = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Toaster />
      <section className="relative flex gap-5 lg:gap-10 w-full">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                recipes={recipesToRender}
              />
            }
          />
        </Routes>
      </section>
    </>
  );
}

export default App;
