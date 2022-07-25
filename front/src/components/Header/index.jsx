
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./header.css";
import useToken from "../../hooks/useToken";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton";
import LoginButton from "../LoginButton";
import AuthenticationButton from "../AuthenticationButton";




function Header() {




 return (
   
    <nav className="nav-1">
     
    

      <Link className="HeaderLinks" to="/home">Home</Link>
      <Link className="HeaderLinks"to="/createPost">CreatePost</Link>
      <Link className="HeaderLinks" to="userprofile">profile</Link>
        <AuthenticationButton />


    </nav>

    
  )
}

export default Header