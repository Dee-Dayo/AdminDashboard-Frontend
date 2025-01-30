// auth/ LoginPage.jsx

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from '../features/auth/authSlice';
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";




const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading, error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(loginUser({ email, password }));
        if (loginUser.fulfilled.match(resultAction)) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                           required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md"
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;