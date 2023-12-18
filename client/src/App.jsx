import Inicio from "./page/inicio/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "./page/libros/Catalogo";
import Navbar from "./components/nav/Navbar";
import About from "./page/about/About";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
