import React from "react"
import {
   BrowserRouter as Router, Routes, Route,
} from "react-router-dom";


import Header from './components/Header';
import UserProfile from "./components/UserProfile";
import Loading from "./components/Loading";

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

import RequireAuth from "./components/RequireAuth/RequireAuth";


import './style/style.css';













const App = () => {



   return (

      <div className="container">


         <Header />

         <Routes>

            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/" exact element={<LandingPage />} />

            <Route element={<RequireAuth />}>
               <Route path="/home" exact element={<Home />} />
            </Route>

            <Route element={<RequireAuth />}>
               <Route path="createPost" exact element={<CreatePost />} />
            </Route>

            <Route element={<RequireAuth />}>
               <Route path='/userprofile' exact element={<UserProfile />} />
            </Route>

            <Route element={<RequireAuth />}>
               <Route path="/logout" exact element={<Logout />} />
            </Route>
            
            <Route element={<RequireAuth />}>
               <Route path="/post/:id" exact element={<ViewPost />} />
            </Route>







         </Routes>

      </div>









   )
}

export default App