import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;