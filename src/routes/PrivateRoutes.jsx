import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import Login from "../pages/Login";
import Loading from "../pages/Loading";
import { useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
      return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default PrivateRoutes;