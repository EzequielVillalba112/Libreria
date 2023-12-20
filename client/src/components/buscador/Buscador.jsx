import { useState } from "react";

export default function Buscador() {
  const [listBooks, setListBooks] = useState([]);

  const searchBooks = (name = "") => {
    if (name != "") {
      fetch(`http://localhost:3000/db/books/${name}`)
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
        }}
      />
      <button className="btnBuscar">Buscar</button>

      <ul className="list-busqueda">
        {listBooks.map((book, i) => (
          <li key={i}>{book.titulo}</li>
        ))}
      </ul>
    </div>
  );
}
