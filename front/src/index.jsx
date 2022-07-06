
import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router, Routes,Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import ViewPost from './pages/ViewPost';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router>
     <Header />

     <Routes>
    
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="CreatePost" element={<CreatePost/>} />
        <Route path="/UpdatePost" element={<UpdatePost/>} />
        <Route path="/ViewPost" element={<ViewPost/>} />
        <Route path="/Contact" element={<Contact/>} />
 
     </Routes>
     <Footer />
  


  </Router>
);
