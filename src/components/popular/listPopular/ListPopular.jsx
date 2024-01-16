import { useEffect, useState } from "react";
import "./listpopular.css";
import { Link } from "react-router-dom";

export default function ListPopular() {
  const [listBooksPopular, setListBooksPopular] = useState([]);

  useEffect(() => {
    fetch(`https://libreria-render.onrender.com/db/popular`)
      .then((r) => {
        return r.json();
      })
      .then((response) => {
        setListBooksPopular(response);
      });
  }, []);

  return (
    <ul className="listCards">
      {listBooksPopular.map((book, i) => (
        <li key={i}>
          <div className="card">
            <Link  to={`/detail/${book.id_libro}`} className="linkPopular">
              <img src={book.portada} alt={book.titulo} />
              <h3>{book.titulo}</h3>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
