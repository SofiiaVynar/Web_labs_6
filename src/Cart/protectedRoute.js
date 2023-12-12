import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';


const ProtectedRoute = (props) => {
    const isUserAuthenticated = isAuthenticated();

    return isUserAuthenticated ? (
        <Route {...props} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;
