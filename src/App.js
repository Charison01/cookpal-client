import "./App.css";
import { Sidebar, Home } from "../src/Components";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <section className="relative">
      <Sidebar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
