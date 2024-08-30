import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handelSetName = (e) => {
        setName(e.target.value);
    };

    const handelSetEmail = (e) => {
        setEmail(e.target.value);
    };

    const handelSetPass = (e) => {
        setPassword(e.target.value);
    };

    const handleSignup = () => {
        
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Sign Up</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={handelSetName}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handelSetEmail}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handelSetPass}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSignup}
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
