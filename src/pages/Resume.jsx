import React from 'react';

const Resume = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-indigo-600 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <a href="/" className="text-white text-2xl font-semibold flex items-center">
                                Resume Uploader
                            </a>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <a href="/" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </a>
                            <a href="/about" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </a>
                            <a href="/projects" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                                Projects
                            </a>
                            <a href="/resume" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                                Resume
                            </a>
                            <a href="/contact" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-6 py-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Upload Your Resume</h2>
                    <p className="text-gray-600 text-center mb-6">Submit your resume to kickstart your career with us.</p>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                Choose a file
                            </label>
                            <div className="mt-1">
                                <input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Upload Resume
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Resume;
