import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/UserContext";
import "./cerrarsecion.css";

export default function CerrarSecion({menu}) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const closed = () => {
    navigate("/");
    logout();
    menu(false);
  };

  return (
    <div className="closed">
      <button onClick={closed}>Cerrar sesión. </button>
    </div>
  );
}
