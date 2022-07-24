
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./header.css";
import useToken from "../../hooks/useToken";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton";
import LoginButton from "../LoginButton";
import AuthenticationButton from "../AuthenticationButton";




function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

// const[isOnline,setIsOnline ]= useState(useToken().token)

  // console.log(useToken().token)

 const handleLogout= ()=>{
  console.log("test")
  window.localStorage.clear();
  setIsOnline(false)
  // Navigate('/login')

 }

 return (
   
    <nav className="nav-1">
     
    

      <Link className="HeaderLinks" to="/">Home</Link>
      <Link className="HeaderLinks"to="/createPost">CreatePost</Link>
      <Link className="HeaderLinks" to="userprofile">profile</Link>

      <div className="nav-2">
      {/* <Link className="HeaderLinks" to="/"onClick={handleLogout}>Logout</Link>
     <Link className="HeaderLinks" to="/login">Login</Link>
         <Link className="HeaderLinks" to="/register">Signup</Link> */}
            <AuthenticationButton />
      </div>


    </nav>
  )
}

export default Header