import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from '../assets/login.png';

// Custom hook for storing token in localStorage
const useAuth = () => {
    const storetokenInLS = (token) => {
        localStorage.setItem("authToken", token);
    };

    return { storetokenInLS };
};

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { storetokenInLS } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        // Static admin check
        if (email === "admin@guidex.com" && password === "admin123") {
            localStorage.setItem("role", "admin");
            storetokenInLS("static-admin-token");
            alert("Admin login successful!");
            navigate("/admin/dashboard"); // Change path as needed
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "Invalid Credentials");
                return;
            }

            const data = await response.json();
            if (data.token) {
                storetokenInLS(data.token);
                alert("Login successful!");
                navigate("/"); // Redirect after successful login
            } else {
                alert("Unexpected error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Side */}
            <div className="w-1/2 bg-gradient-to-br from-blue-900 to-customBlue flex flex-col justify-center items-center text-white p-8">
                <img src={login} alt="Happy adopter with pet" className="mb-6 w-[500px] h-auto" />
                <h1 className="text-4xl font-bold mb-4">Access. Assist. Empower.</h1>
                <p className="text-lg text-center max-w-md">
                    Discover the support you deserve. Explore government aid schemes and navigate official processes with ease. Start your journey today!
                </p>
            </div>

            {/* Right Side */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-gray-50 p-10 relative">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-300 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-blue-300 rounded-full blur-3xl opacity-50"></div>
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Welcome Back!</h2>
                <form className="w-full max-w-md space-y-6 bg-white p-8 shadow-lg rounded-lg" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition duration-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition duration-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-900 to-customBlue text-white font-bold py-3 px-4 rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-gray-600">
                    Don’t have an account?{' '}
                    <a href="/register" className="text-blue-900 font-medium hover:underline hover:text-customBlue transition-colors">
                        Join the GUIDEX Today!
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
