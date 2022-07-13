
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav>
      <Link className="HeaderLinks" to="/">Home</Link>
      <Link className="HeaderLinks" to="/login">Login</Link>
      <Link className="HeaderLinks" to="/signup">Signup</Link>
      <Link className="HeaderLinks"to="/createPost">CreatePost</Link>
      <Link className="HeaderLinks" to="/updatePost">UpdatePost</Link>
      <Link className="HeaderLinks" to="/viewPost">ViewPost</Link>
      <Link className="HeaderLinks" to="/home">Home</Link>
    
    </nav>
  )
}

export default Header