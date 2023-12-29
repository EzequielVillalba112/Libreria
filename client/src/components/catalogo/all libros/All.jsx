import { useEffect, useState } from "react";
import "./all.css";
import { IoSearch } from "react-icons/io5";
import { StarRatio } from "../../funciones/starRation";
import { Link } from "react-router-dom";

export default function All({ idPr = "" }) {
  const [listAllBooks, setListAllBooks] = useState([]);
  const [search, setSearch] = useState();
  const [listSearch, setListSearch] = useState([]);

  const categoriBook = async () => {
    if (idPr != "" && idPr != "all") {
      const url = `http://localhost:3000/db/book/categoria/${idPr}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Nope");
        }
        return res.json().then((response) => {
          setListAllBooks(response);
          if (response.length == 0) {
            setListAllBooks("Failed");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

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
  }, [idPr == "all"]);

  useEffect(() => {
    categoriBook();
    if(listSearch.length == 0){
      setListSearch([1])
    }
  }, [idPr]);

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
    setListSearch([1]);
  }, [search == ""]);

  return (
    <>
      <div className="searchBook">
        <IoSearch color="#f4f4f4" className="searchIcon" />
        <input
          type="text"
          placeholder="Buscar libro"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchBooks} className="btn btnBuscarBook">
          Buscar
        </button>
      </div>
      <div className="listAllBooks">
        <ul>
          {listAllBooks != "Failed" ? (
            listAllBooks.map((book, i) => (
              <li key={i}>
                <div className="cardAllBook">
                  <img src={book.portada} alt={book.titulo} />
                  <div className="dataBook">
                    <h3>{book.titulo}</h3>
                    <p>{book.author}</p>
                    {<img src={StarRatio(book.rate)} alt="" />}
                    <Link
                      to={`/detail/${book.id_libro}`}
                      className="btn btnDetail"
                    >
                      Detalles
                    </Link>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <h2
              style={{ width: "100%", textAlign: "center", color: "#325973" }}
            >
              No hay resultado
            </h2>
          )}
        </ul>

        {listSearch.length == 0 && (
          <h2 style={{ width: "100%", textAlign: "center", color: "#325973" }}>
            No hay resultado
          </h2>
        )}
      </div>
    </>
  );
}
