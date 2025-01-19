import React from 'react';
import '../Login/Login.css'; // Import custom styles
import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'; // Adjust the path to match your project structure

const Log = () => {
    // Add event handlers for form submission or UI interactivity
    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login Submitted');
    };

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register Submitted');
    };

    return (
        <section id="login">
            <div className="wrapper">
                {/* Login Form */}
                <form id="loginForm" onSubmit={handleLoginSubmit}>
                    <span className="rotate-bg"></span>
                    <span className="rotate-bg2"></span>
                    <div className="form-box login">
                        <h2 className="title animation">Login</h2>
                        <div className="input-box animation">
                            <input type="text" id="email" required />
                            <label>Email</label>
                            <i className="bx bxs-user"></i>
                        </div>
                        <div className="input-box animation">
                            <input type="password" id="password" required />
                            <label>Password</label>
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        <button type="submit" className="btn animation">
                            Login
                        </button>
                        <div className="linkTxt animation">
                            <p>
                                Don't have an account?{' '}
                                <a href="#" className="register-link">
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="info-text login">
                        <h2 className="animation">Green Shadow</h2>
                        <p className="animation">
                            "Welcome to GreenShadow – where innovation meets sustainability! 🌿"
                        </p>
                    </div>
                </form>

                {/* Register Form */}
                <form id="registerForms" onSubmit={handleRegisterSubmit}>
                    <div className="form-box register">
                        <h2 className="title animation">Sign Up</h2>
                        <div className="input-box animation">
                            <input type="text" id="registerName" required />
                            <label>Username</label>
                            <i className="bx bxs-user"></i>
                        </div>
                        <div className="input-box animation">
                            <input type="email" id="registerEmail" required />
                            <label>Email</label>
                            <i className="bx bxs-envelope"></i>
                        </div>
                        <div className="input-box animation">
                            <input type="password" id="registerPassword" required />
                            <label>Password</label>
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        <div className="input-box animation">
                            <input type="text" id="userRole" required />
                            <label>Role</label>
                            <i className="bx bxs-user"></i>
                        </div>
                        <button type="submit" className="btn animation">
                            Sign Up
                        </button>
                        <div className="linkTxt animation">
                            <p>
                                Already have an account?{' '}
                                <a href="#" className="login-link">
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="info-text register">
                        <h2 className="animation">Green Shadow</h2>
                        <p className="animation">
                            "Welcome to GreenShadow – where innovation meets sustainability! 🌿"
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Log;
