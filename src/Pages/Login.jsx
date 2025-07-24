import { useContext, useState } from 'react';
import Nav from '../Conponents/Nav';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Login = () => {
    const { signInUser, signInWithGoogle, setUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                Swal.fire("Login Successful", " ", "success");
                navigate(location?.state || "/");
                const user = result.user;
                setUser(user);
                console.log(result)
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const handleGoogle = () => {
        
        googleLogin()
            .then(result => {
                toast.success("Google login successful!");
                navigate('/');
                console.log(result)
            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-center items-center min-h-screen bg-base-200">
                <div className="card w-full max-w-sm shadow-xl bg-base-100">
                    <button onClick={handleGoogle} className="btn btn-outline btn-info border-[#34A853] text-[#34A853]  m-4">
                        Continue with Google
                    </button>
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>

                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="form-control mt-4">
                            <button className="btn btn-primary justify-center">Login</button>
                        </div>
                        <p className="text-sm mt-2 text-center">
                            New here? <Link to="/auth/register" className="text-blue-600">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;