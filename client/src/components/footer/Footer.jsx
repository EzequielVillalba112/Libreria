import "./footer.css";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <ul>
        <li>
          <FaFacebook color="#f4f4f4" size={"2em"} />
        </li>
        <li>
          <AiFillInstagram color="#f4f4f4" size={"2em"} />
        </li>
        <li>
          <ImTwitter color="#f4f4f4" size={"2em"} />
        </li>
      </ul>

      <div className="copyright">
        <h3>&copy; Copyrigh {year}</h3>
      </div>
    </footer>
  );
}
