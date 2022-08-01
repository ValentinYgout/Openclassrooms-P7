
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./header.css";
import logo from"../../logo/icon-left-font-monochrome-black.png"



import AuthenticationButton from "../AuthenticationButton";




function Header() {


 

 return (
   
    <nav className="nav-1">
     
    
      <img src= {logo} alt="" />
      <Link className="HeaderLinks" to="/home">Home</Link>
      <Link className="HeaderLinks"to="/createPost">CreatePost</Link>
      <Link className="HeaderLinks" to="/userprofile">Profile</Link>
        <AuthenticationButton />


    </nav>

    
  )
}

export default Header