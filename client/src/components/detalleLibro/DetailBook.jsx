import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarRatio } from "../funciones/starRation";
import "./detailbook.css";
import Comments from "./comentario/Comments";

export default function DetailBook() {
  const [dataBook, setDataBook] = useState([]);
  const { idBook } = useParams();

  const factBook = async (idBook) => {
    const url = `http://localhost:3000/db/book/${idBook}`;
    if (idBook != "") {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Nope");
        }
        return res.json().then((response) => {
          setDataBook(response);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    factBook(idBook);
  }, []);

  return (
    <>
      <div className="containerDataBook">
        {dataBook.map((data, i) => (
          <div className="datasBook" key={i}>
            <img className="frontPage" src={data.portada} alt={data.titulo} />
            <div className="dataBookDetail">
              <h1>{data.titulo}</h1>
              <img src={StarRatio(data.rate)} alt={data.titulo} />
              <p>{data.synopsis}</p>
              <div className="descriptioBook">
                <div className="itemDes">
                  <h3>Author: </h3>
                  <p>{data.author}</p>
                </div>
                <div className="itemDes">
                  <h3>Año de publicacion: </h3>
                  <p>{data.anio}</p>
                </div>
                <div className="itemDes">
                  <h3>Paginas: </h3>
                  <p>{data.paginas}</p>
                </div>
              </div>
              <button className="btnFavorite">Agregar a favoritos</button>
            </div>
          </div>
        ))}
      </div>
     <Comments/>
    </>
  );
}
