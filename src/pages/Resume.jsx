import React, { useState } from 'react';
import axios from 'axios'; 
import axiosPlus from '../components/Axios';
import {jwtDecode} from 'jwt-decode';

const Resume = () => {
    const [file, setFile] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState('');
    const [uploadError, setUploadError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadToCloudinary = async () => {
        const data = new FormData(); 
        data.append('file', file);
        data.append('upload_preset', 'MyCloud'); 

        try {
            setLoading(true);
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/divlsorxk/image/upload", 
                data
            );
            console.log("Image Upload Success:", response.data.secure_url);
            return response.data.secure_url;
        } catch (err) {
            console.error("Image Upload Failed:", err.message);
            setUploadError("Image upload failed");
            throw new Error("Image upload failed");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setUploadError('Please select a resume to upload.');
            return;
        }

        let userId;
        try {
            const token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            userId = decoded.id;
        } catch (err) {
            console.error("Failed to get user id from token:", err.message);
            setUploadError("Failed to get user id from token");
            return;
        }

        try {
            const cloudinaryUrl = await uploadToCloudinary();
            console.log("Cloudinary URL:", cloudinaryUrl, userId);
            await axiosPlus.post('/upload', { userId, resumeUrl: cloudinaryUrl });
            setUploadSuccess('Resume uploaded successfully!');
            setUploadError('');
            setFile(null);
        } catch (err) {
            console.error("Failed to upload resume:", err.message);
            setUploadError('Failed to upload resume.');
            setUploadSuccess('');
        } finally {
            setLoading(false);
        }
    };

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
                    </div>
                </div>
            </nav>
            <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-6 py-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Upload Your Resume</h2>
                    <p className="text-gray-600 text-center mb-6">Submit your resume to kickstart your career with us.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                Choose a file
                            </label>
                            <div className="mt-1">
                                <input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                                />
                            </div>
                        </div>
                        {uploadError && <p className="text-red-500 text-center">{uploadError}</p>}
                        {uploadSuccess && <p className="text-green-500 text-center">{uploadSuccess}</p>}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={loading}
                            >
                                {loading ? 'Uploading...' : 'Upload Resume'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Resume;
