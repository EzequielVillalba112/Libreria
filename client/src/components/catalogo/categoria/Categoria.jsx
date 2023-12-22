import { useEffect, useState } from "react";
import './categoria.css'

export default function Categoria() {
  const [listCategory, setListCategory] = useState([]);

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

  useEffect(()=>{
    fetchGenre();
  },[])

  return (
    <div className="categoryAll">
        <h2>Categoría</h2>
        <div className="listCategory">
            <ul>
                {
                    listCategory.map((category, i)=> (
                        <li key={i}>{category.genero}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
}
