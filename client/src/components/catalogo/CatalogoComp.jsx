import { useState } from "react";
import All from "./all libros/All";
import "./catalogo.css";
import Categoria from "./categoria/Categoria";

export default function CatalogoComp() {
  //Se guarda la id de la categoria
  const [idPr, setIdPr] = useState();


  return (
    <section className="catalogue">
      <div className="category">
        <Categoria idPr={setIdPr}/>
      </div>
      <div className="allBook">
        {
        //se solicita la id de la categoria
        } 
        <All idPr={idPr}/>
      </div>
    </section>
  );
}
