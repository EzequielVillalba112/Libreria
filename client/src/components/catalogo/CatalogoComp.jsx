import All from "./all libros/All";
import "./catalogo.css";
import Categoria from "./categoria/Categoria";

export default function CatalogoComp() {
  return (
    <section className="catalogue">
      <div className="category">
        <Categoria/>
      </div>
      <div className="allBook">
        <All/>
      </div>
    </section>
  );
}
