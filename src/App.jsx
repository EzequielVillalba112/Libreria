import Inicio from "./page/inicio/Inicio";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Catalogo from "./page/libros/Catalogo";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import DetailBook from "./components/detalleLibro/DetailBook";
import Login from "./components/login/Login";
import { UserProvider } from "./context/UserContext";
import Favorites from "./page/favorites/Favorites";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/detail/:idBook" element={<DetailBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
