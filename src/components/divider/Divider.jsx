import './divider.css'
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Divider({text}) {
  return (
    <section className='divider'>
      <h2>{text[0]}</h2>
      <Link to="/catalogo" className='CatalogueBook'>{text[1]}<FaArrowRightLong /></Link>
    </section>
  )
}