import Contacto from "../../components/contacto/Contacto";
import Divider from "../../components/divider/Divider";
import Popular from "../../components/popular/Popular";
import Portada from "../../components/portada/Portada";

export default function Inicio() {
  return (
    <>
      <Portada />
      <Popular/>
      <Divider text={["Navegue por nuestra biblioteca", "Ver colección"]}/>
      <Contacto/>
    </>
  );
}
