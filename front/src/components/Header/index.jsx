
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav>
      <Link className="HeaderLinks" to="/">Login</Link>
      <Link className="HeaderLinks" to="/Home">Home</Link>
      <Link className="HeaderLinks"to="/CreatePost">CreatePost</Link>
      <Link className="HeaderLinks" to="/UpdatePost">UpdatePost</Link>
      <Link className="HeaderLinks" to="/ViewPost">ViewPost</Link>
           <Link className="HeaderLinks" to="/Home">Home</Link>
    
    </nav>
  )
}

export default Header