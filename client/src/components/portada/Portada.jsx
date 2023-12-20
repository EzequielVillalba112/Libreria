import Buscador from "../buscador/buscador";
import "./portada.css";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";

export default function Portada() {
  return (
    <div className="portadaInicio">
      <section className="leftPortada">
        <h1>Un libro puede cambiar tu vida.</h1>
        <Buscador/>
        <div className="socialNetworks">
          <h2>Nuestras redes sociales</h2>
          <ul>
            <li><FaFacebook color="#f4f4f4" size={'2em'}/></li>
            <li><AiFillInstagram color="#f4f4f4"  size={'2em'} /></li>
            <li><ImTwitter color="#f4f4f4" size={'2em'}/></li>
          </ul>
        </div>
      </section>
      <section className="rightPortada"></section>
    </div>
  );
}
