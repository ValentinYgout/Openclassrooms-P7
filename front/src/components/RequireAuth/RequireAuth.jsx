import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth=()=>{
    const {auth} = useAuth();
    const token = localStorage.getItem('accessToken')
    const location =useLocation();
    return(
        auth.username||token
        ?<Outlet/>
        :<Navigate to="/login" state={{from: location}}replace/>

    );
}

export default RequireAuth