import { useEffect, useState } from "react";
import "./listpopular.css";

export default function ListPopular() {

  const [listBooksPopular, setListBooksPopular] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/db/popular`)
      .then((r)=>{
        return r.json();
      }).then((response)=>{
        setListBooksPopular(response);
      })
  },[]);

  return (
    <ul className="listCards">
      {
        listBooksPopular.map((book, i) =>(
          <li key={i}>
            <div className="card">
              <img src={book.portada} alt={book.titulo} />
              <h3>{book.titulo}</h3>
            </div>
          </li>
        ))
      }
    </ul>
  );
}
