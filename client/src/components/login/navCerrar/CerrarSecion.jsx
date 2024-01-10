import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/UserContext";
import "./cerrarsecion.css";
import { IoLogInOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const notificacion = withReactContent(Swal);

export default function CerrarSecion({ menu, menuResp = false }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const closed = () => {
    notificacion
      .fire({
        title: "¿Desea cerrar sesión?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "cerrar sesión",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/");
          logout();
          menu(false);
        }else{
          menu(false);
        }
      });
  };

  return (
    <div className={`${menuResp == false ? 'closed': "closedRespo"}`}>
      <button onClick={closed}>
        <IoLogInOutline size="2rem" />
        Cerrar sesión. 
      </button>
    </div>
  );
}
