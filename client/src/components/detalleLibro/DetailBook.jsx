import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarRatio } from "../funciones/starRation";


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
    <div className="detailBook">
      <div className="containerDataBook">
        {dataBook.map((data, i) => (
          <div className="datasBook" key={i}>
            <img src={data.portada} alt={data.titulo} />
            <h3>{data.titulo}</h3>
            <img src={StarRatio(data.rate)} alt={data.titulo} />
            <p>{data.anio}</p>
            <p>{data.author}</p>
            <p>{data.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
