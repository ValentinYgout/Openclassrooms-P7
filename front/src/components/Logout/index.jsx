import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './logout.css'

const Logout = () => {
    const navigate = useNavigate()
    const {setAuth} =useAuth();
    const handleLogout = ()=>{
        localStorage.clear()
        setAuth('')
        navigate('/login')

    }
    return (
        <div className="logout">
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;