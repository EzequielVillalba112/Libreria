import { useState, useEffect } from "react";
import "./contacto.css";
import { contactValidate } from "../../validation/contact/contactValidate";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const notificacion = withReactContent(Swal);

export default function Contacto() {

  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [dialog, setDialog] = useState("");
  const [error, setError] = useState("errorMessageFalse");
  const [errorMessage, setErrorMessage] = useState("");

  const sendData = () =>{
    const resultValid = contactValidate(nameUser, email, dialog);

    if(resultValid ===  true) {
      notificacion.fire({
        title: "Mensaje enviado.",
        icon: "success"
      });
      setDialog("");
      setEmail("");
      setNameUser("");
    }else{
      setErrorMessage(resultValid)
    }
  }

   //manda el mensaje si los datos de contacto son incorrecto
   useEffect(() => {
    if (errorMessage !== null) {
      setError("errorMessageTrue");
      setTimeout(() => {
        setError("errorMessageFalse");
      },4000);
    }
  }, [errorMessage]);
  return (
    <section className="contact">
      <section className="leftSection">
        <h2>Contacto.</h2>
        <div className="data">
          <h3>Ubicacion: Av. clove423.</h3>
          <h3>Telefono: +880 1677 902 690</h3>
          <h3>Email: example@gmail.com</h3>
        </div>
      </section>
      <section className="rightSection">
        <div className="containerInput">
          <input
            type="text"
            className="txtName"
            placeholder="Ingrese su nombre:"
            value={nameUser}
            onChange={(e) => {
              setNameUser(e.target.value);
            }}
            required
          />
          <input
            type="email"
            className="txtEmail"
            placeholder="Ingrese su correo:"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <textarea
            type="text"
            className="txtText"
            placeholder="Ingrese su consulta:"
            value={dialog}
            onChange={(e) => {
              setDialog(e.target.value);
            }}
            required
          />
          <span className={error}>{errorMessage}</span>
          <button onClick={sendData} className="btnSendMens">Enviar</button>
        </div>
      </section>
    </section>
  );
}
