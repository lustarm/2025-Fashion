import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const profileUrl = "/profile"
    const loginUrl = "/login"

    useEffect(() => {
        const token = localStorage.getItem("Authorization")

        if (!token) {
            setIsLoggedIn(false)
            return
        }

        async function validateToken() {
            try {
                const response = await fetch('http://localhost:8000/v1/verify', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                // Could use this later for maybe profile picture URL etc
                // const result = await response.json();
                if (response.ok) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch {
                setIsLoggedIn(false);
            }
        }

        validateToken();
    }, [])

    return (
        <nav className="bg-zinc-900 text-white p-4 shadow-md font-outfit">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-white hover:text-shadow-white transition-all duration-300"
                >
                    New Wave <span className="text-amber-100">Fashion</span>
                </Link>

                {/* Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-shadow-white transition-all duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/trends"
                            className="hover:text-shadow-white transition-all duration-300"
                        >
                            Trends
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/shop"
                            className="hover:text-shadow-white transition-all duration-300"
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="hover:text-shadow-white transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={isLoggedIn ? profileUrl : loginUrl}
                            className="hover:text-shadow-white transition-all duration-300"
                        >
                            {isLoggedIn ? "Profile" : "Login"}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
