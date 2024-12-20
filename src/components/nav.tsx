import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-gray-300 font-sans p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white hover:text-sky-300 transition-colors duration-300">
                    New Wave Fashion
                </Link>
                
                {/* Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-white transition-all duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/trends"
                            className="hover:text-white transition-all duration-300"
                        >
                            Trends
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/shop"
                            className="hover:text-white transition-all duration-300"
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="hover:text-white transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {
                /* 
                <Link to="register" className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-400 transition-all duration-300">
                    Sign Up
                </Link>
                */
                }
            </div>
        </nav>
    );
}
