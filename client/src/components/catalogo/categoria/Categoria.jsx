import { useEffect, useState } from "react";
import "./categoria.css";
import { FaArrowDown } from "react-icons/fa";

export default function Categoria({idPr}) {
  const [listCategory, setListCategory] = useState([]);
  const [arrowClick, setArrowClick] = useState(true);

  const fetchGenre = async () => {
    const url = `http://localhost:3000/db/allgenre`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Nope");
      }
      return res.json().then((response) => {
        setListCategory(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  const prueb = (id) =>{
    idPr(id);
  }

  return (
    <div className="categoryAll">
      <div className="titleCate">
        <h2>Categoría</h2>
        <FaArrowDown
          size="1.5em"
          className="arrowDownCate"
          onClick={() => {
            setArrowClick(!arrowClick);
          }}
        />
      </div>
      {arrowClick === true && (
        <div className="listCategory">
          <ul>
            <li onClick={()=>{
                prueb("all")
              }}>Ver todos</li>
            {listCategory.map((category, i) => (
              <li onClick={()=>{
                prueb(category.id_genero)
              }} key={i}>{category.genero}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
