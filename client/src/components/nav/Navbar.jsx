import "./navbar.css";
import Logo from "../../img/logo-b.png";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const menuClick = () => {
    setMenu(!menu);
  };

  console.log(menu);
  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="menuContainer">
          <ul className="menu">
            <li className="itemMenu">
              <Link to="/" className="linkMenu">
                Inicio
              </Link>
            </li>
            <li className="itemMenu">
              <Link to="/catalogo" className="linkMenu">
                Catalogo
              </Link>
            </li>
            <li className="itemMenu">
              <Link to="/about" className="linkMenu">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div className="btnMenu">
          <TiThMenu size={"2em"} color="#325973" onClick={menuClick} />
        </div>
      </nav>
      {menu == true && (
        <div className="menuAct">
          <ul>
            <li className="itemMenu">
              <Link to="/" className="linkMenu">
                Inicio
              </Link>
            </li>
            <li className="itemMenu">
              <Link to="/catalogo" className="linkMenu">
                Catalogo
              </Link>
            </li>
            <li className="itemMenu">
              <Link to="/about" className="linkMenu">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
