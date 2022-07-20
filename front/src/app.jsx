import React from "react"
import{BrowserRouter as Router, Routes,Route,
} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from'./pages/Login'
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Layout from "./components/Layout";



const  App =() =>{
    return (
        <Router>
          <Header />

          <Routes>
             <Route path="/" element={<Layout/>}>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<RequireAuth />}>
                   <Route path="/" element={<Home />} />
                   <Route path="createPost" element={<CreatePost />} />
                   <Route path="/post/:id" element={<ViewPost />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
             </Route>
          </Routes>
          <Footer />

   
   
     </Router>
  
    )
  }
  
  export default App