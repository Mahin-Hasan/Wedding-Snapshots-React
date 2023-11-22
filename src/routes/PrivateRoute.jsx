import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { userState, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location.pathname);
    if (loading) {
        return <div className="h-screen flex justify-center items-center text-6xl">
            <span className="loading loading-dots loading-lg text-warning "></span>
        </div>
    }
    if (userState) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;