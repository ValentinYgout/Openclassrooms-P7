
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav>
      <Link className="HeaderLinks" to="/">Home</Link>
      <Link className="HeaderLinks" to="/login">Login</Link>
      <Link className="HeaderLinks" to="/register">Signup</Link>
      <Link className="HeaderLinks"to="/createPost">CreatePost</Link>

 
    
    </nav>
  )
}

export default Header