import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation(); //get previous denied private route
    const navigate = useNavigate();



    const handleLogin = (event) => {
        console.log('clicked');
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(res => {
                console.log(res.user);
                //navigate after login
                toast.success('Logged In Successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                toast.error(err.message)
                console.error(err.message);
            })
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <span href="#" className="label-text-alt link link-hover">Do not have an account? <Link className="border-b font-semibold border-primary text-primary" to='/register'>Register</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-outline bg-[#c8b293] hover:bg-stone-600 text-white rounded-md">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;