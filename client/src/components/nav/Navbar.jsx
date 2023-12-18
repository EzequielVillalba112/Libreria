import "./navbar.css";
import Logo from "../../img/logo-b.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="menuContainer">
        <ul className="menu">
          <li className="itemMenu">
            <Link to="/"  className="linkMenu">Inicio</Link>
          </li>
          <li className="itemMenu">
            <Link to="/catalogo"  className="linkMenu">Catalogo</Link>
          </li>
          <li className="itemMenu">
            <Link to="/about" className="linkMenu">Sobre Nosotros</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
