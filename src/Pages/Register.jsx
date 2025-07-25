import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { createUser, googleLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password validation
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        if (!uppercase || !lowercase || password.length < 6) {
            setError("Password must have uppercase, lowercase, and at least 6 characters.");
            toast.error("Invalid password format.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success("Registration successful!");
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError(err.message);
                toast.error(err.message);
            });
    };

    const handleGoogle = () => {
        
        googleLogin()
            .then(result => {
                toast.success("Google login successful!");
                navigate(location?.state ? location.state : '/')
                console.log(result)
            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-2xl font-bold text-center">Register</h1>

                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " required />
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="form-control mt-3">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="text-center mt-2">
                        <p>Already have an account? <a className="text-blue-500 underline" href="login">Login</a></p>
                    </div>
                    <div className="divider">or</div>
                    <button onClick={handleGoogle} type="button" className="btn btn-outline">
                        <FcGoogle className="text-2xl" /> Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
