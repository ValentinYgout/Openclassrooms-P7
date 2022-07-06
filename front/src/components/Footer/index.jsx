import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <Link className="FooterLinks" to="/Contact">Contact</Link>
     
    </footer>
  )
}

export default Footer