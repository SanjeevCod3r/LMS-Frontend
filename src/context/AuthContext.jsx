import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);
    const [isEducator, setIsEducator] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Set up axios defaults
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    // Register user
    const register = async (userData) => {
        try {
            const response = await axios.post(`${backendUrl}/api/auth/register`, userData);
            
            if (response.data.success) {
                const { token: newToken, user: newUser } = response.data;
                setToken(newToken);
                setUser(newUser);
                setIsEducator(newUser.role === 'educator');
                localStorage.setItem('token', newToken);
                toast.success('Registration successful!');
                return { success: true };
            } else {
                toast.error(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Registration failed';
            toast.error(message);
            return { success: false, message };
        }
    };

    // Login user
    const login = async (credentials) => {
        try {
            const response = await axios.post(`${backendUrl}/api/auth/login`, credentials);
            
            if (response.data.success) {
                const { token: newToken, user: newUser } = response.data;
                setToken(newToken);
                setUser(newUser);
                setIsEducator(newUser.role === 'educator');
                localStorage.setItem('token', newToken);
                toast.success('Login successful!');
                return { success: true };
            } else {
                toast.error(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed';
            toast.error(message);
            return { success: false, message };
        }
    };

    // Logout user
    const logout = () => {
        setToken(null);
        setUser(null);
        setIsEducator(false);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        toast.success('Logged out successfully');
    };

    // Get current user profile
    const fetchUserProfile = async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`${backendUrl}/api/auth/profile`);
            
            if (response.data.success) {
                setUser(response.data.user);
                setIsEducator(response.data.user.role === 'educator');
            } else {
                // Token might be invalid
                logout();
            }
        } catch (error) {
            console.error('Failed to fetch user profile:', error);
            // Token might be invalid
            logout();
        } finally {
            setLoading(false);
        }
    };

    // Update user profile
    const updateProfile = async (profileData) => {
        try {
            const response = await axios.put(`${backendUrl}/api/auth/profile`, profileData);
            
            if (response.data.success) {
                setUser(response.data.user);
                toast.success('Profile updated successfully');
                return { success: true };
            } else {
                toast.error(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Profile update failed';
            toast.error(message);
            return { success: false, message };
        }
    };

    // Change password
    const changePassword = async (passwordData) => {
        try {
            const response = await axios.put(`${backendUrl}/api/auth/change-password`, passwordData);
            
            if (response.data.success) {
                toast.success('Password changed successfully');
                return { success: true };
            } else {
                toast.error(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Password change failed';
            toast.error(message);
            return { success: false, message };
        }
    };

    // Update role to educator
    const updateRoleToEducator = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/educator/update-role`);
            
            if (response.data.success) {
                setIsEducator(true);
                setUser(prev => ({ ...prev, role: 'educator' }));
                toast.success('You are now an educator!');
                return { success: true };
            } else {
                toast.error(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Role update failed';
            toast.error(message);
            return { success: false, message };
        }
    };

    // Get token (for compatibility with existing code)
    const getToken = () => token;

    // Check if user is authenticated
    const isAuthenticated = !!token && !!user;

    // Initialize auth state
    useEffect(() => {
        if (token) {
            fetchUserProfile();
        } else {
            setLoading(false);
        }
    }, []);

    const value = {
        user,
        token,
        loading,
        isEducator,
        isAuthenticated,
        register,
        login,
        logout,
        updateProfile,
        changePassword,
        updateRoleToEducator,
        getToken,
        setIsEducator
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
