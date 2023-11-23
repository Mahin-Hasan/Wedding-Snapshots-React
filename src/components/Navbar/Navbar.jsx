import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { userState, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navlinks = <>
        <li className="mr-4 text-lg font-semibold"><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-500 border-b-2 border-amber-900" : "text-[#c49350]"
            }
        >Home</NavLink></li>
        <li className="mr-4 text-lg font-semibold"><NavLink to='/gallary'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-500 border-b-2 border-amber-900" : "text-[#c49350]"
            }
        >Gallery</NavLink></li>
        <li className="mr-4 text-lg font-semibold"><NavLink to='/contact'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-500 border-b-2 border-amber-900" : "text-[#c49350]"
            }
        >Contact</NavLink></li>
    </>


    return (
        <nav className="container mx-auto mb-14">
            <div className="navbar bg-[#fcf9f3]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <NavLink to='/'> <img className="w-[100px]" src={logo} /> </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        userState ?
                            <div className="flex items-center">
                                <img className="w-12 rounded-full mr-3 border-2 border-[#c49350]" src={userState.photoURL} alt="pic" />
                                <p className="mr-3 font-mono font-semibold text-stone-500">{userState.displayName}</p>
                                <Link onClick={handleLogOut} to='/register'><button className="btn btn-sm btn-outline btn-warning">Sign Out</button></Link>
                            </div>
                            :
                            <Link to='/login'><button className="btn btn-sm btn-outline btn-info">log in</button></Link>

                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;