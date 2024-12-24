import { Link } from "react-router-dom";

import Navbar from "../../components/nav";

export default function Login() {

    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                    {/* Header */}
                    <h2 className="text-2xl font-semibold text-center text-zinc-900 mb-12">Login</h2>

                    {/* Inputs */}
                    <div className="space-y-5">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full mt-6 bg-zinc-900 text-white py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors"
                    >
                        Login
                    </button>
                    {/* Register Button */}
                    <Link
                        to="/register"
                        className="text-zinc-500 text-xs pt-3 hover:text-amber-400 transition-colors duration-300"
                    >
                        Not a member? Register here.
                    </Link>
                </div>
            </div>
        </div>
    );
}
