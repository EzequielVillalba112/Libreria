import "./portada.css";

export default function Portada() {
  return (
    <div className="portadaInicio">
      <div className="leftPortada">
        <h1>Un libro puede cambiar tu vida.</h1>
        <div className="buscador">
          <input type="text" placeholder="Buscar un libro" />
          <button className="btnBuscar">Buscar</button>

          <ul className="list-busqueda">
            
          </ul>
        </div>
      </div>
      <div className="rightPortada"></div>
    </div>
  );
}
