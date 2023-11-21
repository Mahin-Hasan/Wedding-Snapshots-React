import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";



const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);



    const handleRegistration = e => {
        console.log('clicked');
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, image, email, password);


        //create user with email and pass
        createUser(email, password)
            .then(res => {
                console.log(res.user);
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
                                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
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
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignUp} className="btn btn-primary"><FaGoogle /> Sign Up With Google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;