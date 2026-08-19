import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";

import Loading from "../pages/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    if(loading){
      return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoutes;