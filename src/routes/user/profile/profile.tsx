import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../../components/nav";

export default function Profile() {
    // Simulated data for the profile page (this would come from the backend in a real app)
    const [user, setUser] = useState({
        username: "John Doe",
        email: "john@example.com",
        profilePic: "/src/assets/profilepic.jpg", // Default profile picture
    });

    useEffect(() => {
        // Simulate fetching user data from an API
        // Replace this with actual API call logic to get user data
        setUser({
            username: "John Doe",
            email: "john@example.com",
            profilePic: "/src/assets/profilepic.jpg",
        });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("Authorization")
    }

    return (
        <div className="min-h-screen bg-zinc-900 text-white font-outfit">
            <Navbar />
            <div className="flex">
                {/* Sidebar */}
                <div className="px-6 flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold mt-6 mb-6">Profile Menu</h2>
                    <Link to="/profile/edit"
                        className="px-10 py-2 text-lg text-black bg-white rounded-sm hover:bg-amber-100 transition-all duration-300"
                    >
                        Overview
                    </Link>

                    <Link to="/profile/settings"
                        className="px-10 py-2 text-lg text-black bg-white rounded-sm hover:bg-amber-100 transition-all duration-300"
                    >
                        Settings
                    </Link>

                    <Link
                        to="/login"
                        onClick={handleLogout}
                        className="px-10 py-2 text-lg text-black bg-white rounded-sm hover:bg-amber-100 transition-all duration-300"
                    >
                        Logout
                    </Link>
                </div>

                {/* Profile Content */}
                <div className="w-3/4 p-6">
                    <h1 className="text-3xl font-bold mb-6 text-center">Profile Overview</h1>
                    <div className="flex items-center justify-center mb-8">
                        <img
                            src={user.profilePic}
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full border-4 border-amber-100"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">{user.username}</h2>
                        <p className="text-xl text-zinc-400 mb-4">{user.email}</p>

                        <div className="flex justify-center gap-4">
                            <Link
                                to="/profile/edit"
                                className="bg-amber-100 text-black px-6 py-2 rounded-lg hover:bg-amber-200 transition-all duration-300"
                            >
                                Edit Profile
                            </Link>
                            <Link
                                to="/profile/settings"
                                className="bg-zinc-700 text-white px-6 py-2 rounded-lg hover:bg-zinc-600 transition-all duration-300"
                            >
                                Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
