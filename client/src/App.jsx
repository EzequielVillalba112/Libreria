import Inicio from "./page/inicio/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "./page/libros/Catalogo";
import Navbar from "./components/nav/Navbar";
import About from "./page/about/About";
import Footer from "./components/footer/Footer";

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
        <Footer/>
      </Router>
    </>
  );
}

export default App;
