import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Login = ({ onSwitchToSignup, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMobile]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const result = await login(formData);
        
        if (result.success) {
            onClose();
            navigate('/');
        }
        
        setLoading(false);
    };

    return (
        <AnimatePresence>
            <motion.div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
            >
                {/* Amazing Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Interactive Mouse Follower */}
                    {!isMobile && (
                        <motion.div
                            className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
                            animate={{
                                x: mousePosition.x - 192,
                                y: mousePosition.y - 192,
                            }}
                            transition={{ type: "spring", stiffness: 50, damping: 30 }}
                        />
                    )}

                    {/* Floating Geometric Shapes */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white/5 rounded-full"
                            style={{
                                width: Math.random() * 20 + 10,
                                height: Math.random() * 20 + 10,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: Math.random() * 4 + 4,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                <motion.div 
                    className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/20"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header with Logo */}
                    <motion.div 
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="flex justify-center mb-4">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-black/10 rounded-full blur-xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <img
                                    src={assets.Logo1}
                                    alt="Hey.Naimish"
                                    className="relative w-16 h-16 object-contain"
                                />
                            </motion.div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-black mb-2">Welcome Back!</h2>
                                <p className="text-gray-600">Sign in to your Hey.Naimish account</p>
                            </div>
                            <motion.button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ×
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <motion.div className="relative">
                                <motion.input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black focus:bg-white/80 transition-all duration-300 text-gray-800 placeholder-gray-400"
                                    placeholder="Enter your email address"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    📧
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Password Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <motion.div className="relative">
                                <motion.input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black focus:bg-white/80 transition-all duration-300 text-gray-800 placeholder-gray-400 pr-12"
                                    placeholder="Enter your password"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                whileHover={{ scale: loading ? 1 : 1.02 }}
                                whileTap={{ scale: loading ? 1 : 0.98 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            Signing in...
                                        </>
                                    ) : (
                                        <>
                                            Sign In
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                🚀
                                            </motion.span>
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.form>

                    {/* Footer */}
                    <motion.div 
                        className="mt-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">New to Hey.Naimish?</span>
                            </div>
                        </div>
                        
                        <motion.button
                            onClick={onSwitchToSignup}
                            className="mt-4 text-black hover:text-gray-700 font-semibold text-sm border-2 border-black rounded-xl px-6 py-2 hover:bg-black hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Create Account
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Login;
