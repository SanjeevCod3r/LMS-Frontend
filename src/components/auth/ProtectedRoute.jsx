import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Login from './Login';
import Signup from './Signup';

const ProtectedRoute = ({ children, requireAuth = true, requireRole = null }) => {
    const { user, loading, isAuthenticated } = useAuth();
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    // Show loading spinner while checking authentication
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Authentication Required
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        You need to be logged in to access this page.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => setShowLogin(true)}
                            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setShowSignup(true)}
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Auth Modals */}
                    {showLogin && (
                        <Login 
                            onClose={() => setShowLogin(false)}
                            onSwitchToSignup={() => {
                                setShowLogin(false);
                                setShowSignup(true);
                            }}
                        />
                    )}

                    {showSignup && (
                        <Signup 
                            onClose={() => setShowSignup(false)}
                            onSwitchToLogin={() => {
                                setShowSignup(false);
                                setShowLogin(true);
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }

    // If specific role is required but user doesn't have it
    if (requireRole && user && !requireRole.includes(user.role)) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Access Denied
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        You don't have permission to access this page.
                        {requireRole.includes('educator') && (
                            <span className="block mt-2">
                                You need to be an educator to access this content.
                            </span>
                        )}
                    </p>
                    <div className="text-center">
                        <button
                            onClick={() => window.history.back()}
                            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // If all checks pass, render the protected content
    return children;
};

export default ProtectedRoute;
