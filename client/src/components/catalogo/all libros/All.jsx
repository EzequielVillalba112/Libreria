import { useEffect, useState } from "react";
import "./all.css";
import { IoSearch } from "react-icons/io5";

export default function All() {
  const [listAllBooks, setListAllBooks] = useState([]);
  const [search, setSearch] = useState();
  const [listSearch, setListSearch] = useState([1]);

  const allBooks = async () => {
    const url = `http://localhost:3000/db/all`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Nope");
      }
      return res.json().then((response) => {
        setListAllBooks(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allBooks();
  }, []);

  const searchBooks = async () => {
    const url = `http://localhost:3000/db/books/${search}`;
    if (search != "") {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Nope");
        }
        return res.json().then((response) => {
          setListSearch(response);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setListAllBooks(listSearch);
  }, [listSearch]);

  useEffect(() => {
    allBooks();
    setListSearch([1])
  }, [search == ""]);

  return (
    <div className="allBooks">
      <div className="searchBook">
        <IoSearch color="#f4f4f4" className="searchIcon" />
        <input
          type="text"
          placeholder="Buscar libro"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchBooks} className="btnBuscarBook">Buscar</button>
      </div>
      <div className="listAllBooks">
        <ul>
          {listAllBooks.map((book, i) => (
            <li key={i}>
              <div className="card">
                <img src={book.portada} alt={book.titulo} />
                <h3>{book.titulo}</h3>
              </div>
            </li>
          ))}
        </ul>

        {listSearch.length == 0 && (
          <h2 style={{ width: "100%", textAlign: "center", color: "#325973" }}>
            No hay resultado
          </h2>
        )}
      </div>
    </div>
  );
}
