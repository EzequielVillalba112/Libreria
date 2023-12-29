import { useState } from "react";
import All from "./all libros/All";
import "./catalogo.css";
import Categoria from "./categoria/Categoria";

export default function CatalogoComp() {
  const [idPr, setIdPr] = useState();

  return (
    <section className="catalogue">
      <div className="category">
        <Categoria idPr={setIdPr}/>
      </div>
      <div className="allBook">
        <All idPr={idPr}/>
      </div>
    </section>
  );
}
