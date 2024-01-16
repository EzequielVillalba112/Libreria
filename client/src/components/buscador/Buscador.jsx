import { useState } from "react";
import { Link } from "react-router-dom";

export default function Buscador() {
  const [listBooks, setListBooks] = useState([]);
  const [search, setSearch] = useState();

  const searchBooks = (name = "") => {
    if (name != "") {
      fetch(`https://libreria-render.onrender.com/db/books/${name}`)
        .then((r) => {
          return r.json();
        })
        .then((response) => {
          setListBooks(response);
        });
    }
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar un libro"
        onChange={(e) => {
          searchBooks(e.target.value);
          setSearch(e.target.value);
        }}
      />
      <button className="btnBuscar">Buscar</button>

      {search != "" && (
        <ul className="list-busqueda">
          {listBooks.map((book, i) => (
            <li key={i}>
              <Link to={`/detail/${book.id_libro}`} className="linkBook">{book.titulo}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
