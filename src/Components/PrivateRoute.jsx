import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    
const location=useLocation()
if(loading){
    return("it's loading")
}

    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate> ;
};

export default PrivateRoute;