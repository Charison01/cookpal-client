import "./App.css";
import { useState, useEffect } from "react";
import { Sidebar, Home, Footer } from "../src/Components";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Community,
  Explore,
  Settings,
  Help,
  Favorites,
  MyRecipes,
  Recipedetails,
} from "./Pages";
function App() {
  //create data in parent component
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("https://cookpal.up.railway.app/recipes");
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
          setLoading(false);
        }
      })();
    } catch (error) {
      console.error(error);
      setLoading(false);
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
          <Route
            path="recipes"
            element={
              <Explore
                search={search}
                setSearch={setSearch}
                recipes={recipesToRender}
                loading={loading}
              />
            }
          />
          <Route path="settings" element={<Settings />} />
          <Route path="community" element={<Community />} />
          <Route path="help" element={<Help />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="my-recipes" element={<MyRecipes />} />
          <Route path="recipedetails/:id" element={<Recipedetails />} />
        </Routes>
      </section>
      <hr className="mt-2 border-white" />
      <Footer />
    </>
  );
}

export default App;
