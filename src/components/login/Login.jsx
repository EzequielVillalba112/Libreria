import { useEffect, useState } from "react";
import "./login.css";
import Axios from "axios";
import { useAuth } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../validation/login/loginValidate";

export default function Login() {
  const [emaiLogin, setEmailLogin] = useState("");
  const [passwordLogin, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [classLoginStatus, setClassLoginStatus] = useState("message");

  const navigate = useNavigate();

  const { login } = useAuth();

  const data = async (e) => {
    e.preventDefault();
    let resultValid = validateLogin(emaiLogin, passwordLogin);

    setLoginStatus(resultValid);

    if (resultValid === true) {
      const url = `https://libreria-render.onrender.com/db/login/`;

      Axios.post(url, {
        LoginUserEmail: emaiLogin,
        LoginPassword: passwordLogin,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus("Usuarion o contraseña incorrecto");
          navigate("/login");
        } else {
          //pasa los datos resivido al contexto para que pueda usarse en el resto de la pagina 
          login(response.data);
          navigate("/");
        }
      });
    }
  };

  //manda el mensaje si el usuario es incorrecto
  useEffect(() => {
    if (loginStatus !== null) {
      setClassLoginStatus("messageError");
      setTimeout(() => {
        setClassLoginStatus("message");
      },4000);
    }
  }, [loginStatus]);

  return (
    <>
      <div className="containerLogin">
        <div className="login">
          <form>
            <h2>Login.</h2>
            <input
              type="text"
              placeholder="Ingrese su correo."
              onChange={(e) => {
                setEmailLogin(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Ingrese su contraseña."
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                data(e);
              }}
            >
              Iniciar sesión
            </button>

            <span className={classLoginStatus}>{loginStatus}</span>
          </form>
        </div>
      </div>
    </>
  );
}
