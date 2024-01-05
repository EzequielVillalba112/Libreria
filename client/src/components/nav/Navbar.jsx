import "./navbar.css";
import Logo from "../../img/logo-b.png";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/UserContext";
import CerrarSecion from "../login/navCerrar/CerrarSecion";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [signOff, setSingOff] = useState(false);

  const { user } = useAuth();

  const menuClick = () => {
    setMenu(!menu);
  };

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
          </ul>
        </div>

        <div className="btnUserLogin">
          {user.length > 0 ? (
            <>
              <h2
                onClick={() => {
                  setSingOff(!signOff);
                }}
              >
                {user[0].nombre}
              </h2>

              {signOff === true ? <CerrarSecion menu={setSingOff}/> : ""}
            </>
          ) : (
            <Link to="/login">
              <h2>Iniciar sesión.</h2>
            </Link>
          )}
          <FaUserCircle size="3em" style={{ marginRight: "20px" }} />
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
                Catálogo
              </Link>
            </li>
          </ul>
          <div className="btnUserLoginAct">
            <FaUserCircle size="3em" style={{ marginRight: "20px" }} />
            <h2>Iniciar sesión.</h2>
          </div>
        </div>
      )}
    </>
  );
}
