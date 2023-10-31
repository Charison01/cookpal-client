import "./App.css";
import { Sidebar, Home } from "../src/Components";
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
        </Routes>
      </section>
    </>
  );
}

export default App;
