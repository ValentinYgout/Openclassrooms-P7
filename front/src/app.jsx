import React from "react"
import {
   BrowserRouter as  Router,Routes, Route,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login'
import Register from "./pages/Register";
import useToken from './hooks/useToken';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";
// import RequireAuth from "./components/RequireAuth/RequireAuth";
// import Layout from "./components/Layout";
import Loading from "./components/Loading";
import axios from'axios'
import LandingPage from "./pages/LandingPage";
import { useNavigate } from "react-router-dom";
import './style/style.css';








const App = () => {
   const { isLoading } = useAuth0();

   if (isLoading) {
      return <Loading />;
    }

   return (
 
  <div className="container">
   
   
           <Header />
 
     <Routes>
     
           {/* <Route path="/login" element={<Login setToken={setToken} />} />
           <Route path="/register" element={<Register />} /> */}
           {/* <Route path="/" element={<Layout/>}> */}
           

           <Route path="/" element={<LandingPage/>} />
           {/* <Route element={<RequireAuth />}> */}
           <Route path="/home" element={<Home/>} />
           <Route path ='/userprofile' element ={<UserProfile/>}/>
           <Route path="createPost" element={<CreatePost />} />
           <Route path="/post/:id" element={<ViewPost />} />
           {/* </Route> */}
           <Route path="/contact" element={<Contact />} />
           {/* </Route> */}
        </Routes>
        <Footer />
  </div>
         
         
        




     

   )
}

export default App