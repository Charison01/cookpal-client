import "./App.css";
import { Sidebar, Home, Signup } from "../src/Components";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <section className="relative">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </section>
  );
}

export default App;
