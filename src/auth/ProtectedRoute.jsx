import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

const ProtectedRoute = ({ children }) => {
    const { Authenticated } = useAuth();

    if (!Authenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
