import "./contacto.css";

export default function Contacto() {
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
            required
          />
          <input
            type="email"
            className="txtEmail"
            placeholder="Ingrese su correo:"
            required
          />
          <textarea
            type="text"
            className="txtText"
            placeholder="Ingrese su consulta:"
            required
          />
          <button className="btnSendMens">Enviar</button>
        </div>
      </section>
    </section>
  );
}
