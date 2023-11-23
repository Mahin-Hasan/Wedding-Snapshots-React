import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegistration = e => {
        console.log('clicked');
        e.preventDefault();
        const name = e.target.name.value;
        const imageUrl = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, imageUrl, email, password);

        //validation
        if (password.length < 6) {
            toast.error(`password can not be less than 6 character`);
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Must contain at least one capital letter')
            return;
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error('Must contain at least one special character')
            return;
        }
        /*
        add special ch validation
        */


        //create user with email and pass
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('Registration Successful')
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: imageUrl
                })
                navigate('/')
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleGoogleSignUp = () => {
        console.log('clicked');
        googleLogin()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }




    return (
        <div>
            <div className="h-screen flex items-center justify-center">
                <div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegistration}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered" />
                                </div>
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
                                    {/* <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label> */}
                                </div>
                                <label className="label">
                                    <span href="#" className="label-text-alt link link-hover">Already have an account? <Link className="border-b font-semibold border-primary text-primary" to='/login'>Login</Link></span>
                                </label>
                                <div className="form-control mt-6">
                                <button className="btn btn-outline bg-[#c8b293] hover:bg-stone-600 text-white rounded-md">Register</button>
                                </div>
                            </form>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignUp} className="btn btn-outline btn-primary"><FaGoogle /> Sign Up With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;