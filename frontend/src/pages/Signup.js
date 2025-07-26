import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { APIUrl, handleError, handleSuccess } from '../utils';
import '../login.css';

// Optional icons
const FaSun = () => <span>☀️</span>;
const FaMoon = () => <span>🌙</span>;
const FaUserPlus = () => <span>➕</span>;

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [darkMode, setDarkMode] = useState(false);
    const [shake, setShake] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        if (!name || !email || !password) {
            triggerShake();
            return handleError('Name, email, and password are required');
        }

        try {
            const url = `${APIUrl}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                handleSuccess(message || 'Signup successful');
                setTimeout(() => navigate('/login'), 1000);
            } else {
                triggerShake();
                const details = error?.details?.[0]?.message || message || 'Signup failed';
                handleError(details);
            }
        } catch (err) {
            triggerShake();
            handleError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className={`login-page ${darkMode ? 'dark-theme' : 'light-theme'}`}>
            <div className="login-background"></div>

            <button
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <div className={`login-container ${shake ? 'shake-animation' : ''}`}>
                <div className="login-header">
                    <h1>Create Account</h1>
                    <p>Sign up to get started</p>
                </div>

                <form onSubmit={handleSignup} className="login-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={handleChange}
                            value={signupInfo.name}
                            type="text"
                            name="name"
                            id="name"
                            className="form-input"
                            placeholder="Enter your name"
                            autoComplete="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            value={signupInfo.email}
                            type="email"
                            name="email"
                            id="email"
                            className="form-input"
                            placeholder="Enter your email"
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            value={signupInfo.password}
                            type="password"
                            name="password"
                            id="password"
                            className="form-input"
                            placeholder="Enter your password"
                            autoComplete="new-password"
                        />
                    </div>

                    <button type="submit" className="login-button">
                        <FaUserPlus className="login-icon" />
                        <span>Signup</span>
                    </button>
                </form>

                <div className="signup-link">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>

            <ToastContainer theme={darkMode ? 'dark' : 'light'} />
        </div>
    );
}

export default Signup;
