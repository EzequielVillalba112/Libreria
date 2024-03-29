import { useEffect, useState } from "react";
import { StarRatio } from "../funciones/starRation";
import "./favorite.css";
import { Link } from "react-router-dom";

export default function AllFavorites() {
  const [listFavorite, setListFavorite] = useState([]);
  const [user, setUser] = useState([]);
  const [idUser, setIdUser] = useState({ id_User: null });

  useEffect(() => {
    let dataUser = localStorage.getItem("dataUser");
    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }
  }, []);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("idUser"));

    if (id) {
      setIdUser(id);
    } else if (user && user.length > 0) {
      const idUser = user[0];
      setIdUser(idUser);
      localStorage.setItem("idUser", JSON.stringify(idUser));
    }
  }, [user]);

  const listBookFavorites = async () => {
    if (idUser !== null && idUser !== undefined) {
      const url = `https://libreria-render.onrender.com/db/favorite/${idUser.id_User}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Nope");
        }
        return res.json().then((response) => {
          if (response.length === 0) {
            setListFavorite([]);
          } else {
            setListFavorite(response);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    listBookFavorites();
  }, [idUser]);

  return (
    <section className="favoriteBook">
      <h1>Mis libros favoritos</h1>

      <div className="containerFavoriteBook">
        <ul className="listFavoriteBook">
          {Array.isArray(listFavorite) &&
            listFavorite.map((favorite, i) => (
              <li key={i}>
                <div className="cardAllBook">
                  <img src={favorite.portada} alt={favorite.titulo} />
                  <div className="dataBook">
                    <h3>{favorite.titulo}</h3>
                    <p>{favorite.author}</p>
                    {<img src={StarRatio(favorite.rate)} alt="" />}
                    <Link
                      to={`/detail/${favorite.id_libro}`}
                      className="btn btnDetail"
                    >
                      Detalles
                    </Link>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
