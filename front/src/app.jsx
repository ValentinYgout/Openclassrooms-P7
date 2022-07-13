import React from "react"
import{BrowserRouter as Router, Routes,Route,
} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import ViewPost from './pages/ViewPost';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import LogInForm from "./pages/Login";
import SignUpForm from "./pages/Signup";



const  App =() =>{
    return (
        <Router>
        <Header />
   
        <Routes>
       
           <Route path="/" element={<Home/>} />
           <Route path="/Login" element={<LogInForm/>} />
           <Route path="/Signup" element={<SignUpForm/>} />
           <Route path="CreatePost" element={<CreatePost/>} />
           <Route path="/UpdatePost" element={<UpdatePost/>} />
           <Route path="/ViewPost" element={<ViewPost/>} />
           <Route path="/Contact" element={<Contact/>} />
    
        </Routes>
        <Footer />
     
   
   
     </Router>
  
    )
  }
  
  export default App