import { Link } from "react-router-dom";

export default function Navbar() {
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
                            to="/login"
                            className="hover:text-shadow-white transition-all duration-300"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
