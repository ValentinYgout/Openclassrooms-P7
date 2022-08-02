
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./header.css";
import logo from"../../logo/icon-left-font-monochrome-black.png"
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import Logout from "../Logout";


// import AuthenticationButton from "../AuthenticationButton";




function Header() {
  const {auth} =useAuth();

  useEffect(() => {
    (async () => {
      console.log(auth,'auth?')
    })();
  }, [auth]);

 

 return (
  (auth.accessToken || localStorage.getItem("accessToken")) ?(

    <nav className="nav-1">
      <img src= {logo} alt="" />
      <Link className="HeaderLinks" to="/home">Home</Link>
      <Link className="HeaderLinks"to="/createPost">CreatePost</Link>
      <Link className="HeaderLinks" to="/userprofile">Profile</Link>
      <Logout />

        {/* <AuthenticationButton /> */}

    </nav>
  ):(
    <nav className="nav-1">
      <img src= {logo} alt="" />
    <Link className="HeaderLinks" to="/login">Login</Link>
    <Link className="HeaderLinks" to="/register">Signup</Link>

  </nav>
  )

    
  )
}

export default Header