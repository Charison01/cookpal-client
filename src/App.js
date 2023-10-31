import "./App.css";
import { Sidebar, Home, Settings } from "../src/Components";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <section className="relative flex gap-5 lg:gap-10 w-full">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element = {<Settings />} />
        </Routes>
      </section>
    </>
  );
}

export default App;