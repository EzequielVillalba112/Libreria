import Inicio from "./page/inicio/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "./page/libros/Catalogo";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import DetailBook from "./components/detalleLibro/DetailBook";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/detail/:idBook" element={<DetailBook/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
