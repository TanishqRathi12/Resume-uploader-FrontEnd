import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../components/Axios';
import { useAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false); 
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return; 

        setLoading(true);
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            await axios.post('/login', formData);
            setSuccess('Login successful!');
            login();
            setError('');
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (err) {
            setError('Login failed. Please try again.');
            setSuccess('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-500 to-teal-500">
            <motion.div
                className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                    <button
                        type="submit"
                        disabled={loading} 
                        className={`w-full py-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'} text-white font-semibold rounded-lg shadow-md hover:${loading ? 'bg-gray-400' : 'bg-blue-700'} focus:outline-none transition-colors duration-300`}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-700">Don't have an account?</p>
                    <Link
                        to="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
