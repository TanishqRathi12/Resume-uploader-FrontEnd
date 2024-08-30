import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../components/Axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const Navigate = useNavigate();
    const { signup } = useAuth();


    const handleSetName = (e) => {
        setName(e.target.value);
    };

    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSetPass = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        try {
            await axios.post('/signup', formData);
            setSuccess('Signup successful!');
            signup();
            setEmail('');
            setPassword('');
            setName('');
            setError('');
            Navigate('/');
        } catch (err) {
            setError('Signup failed. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Sign Up</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={handleSetName}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleSetEmail}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handleSetPass}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-700">Already a user?</p>
                    <Link
                        to="/login" 
                        className="text-indigo-600 hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
