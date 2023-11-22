import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { userState, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location.pathname);
    if (loading) {
        return <span className="">Loading .....</span>
    }
    if (userState) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;