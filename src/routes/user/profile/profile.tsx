import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Navbar from "../../../components/nav";
import VerifyToken from "../../../util/verifyToken";

export default function Profile() {
    const navigate = useNavigate()
    const isLoggedIn = VerifyToken()

    if(!isLoggedIn) {
        navigate("/login")
    }

    const [user, setUser] = useState({
        username: "...",
        email: "...",
        profilePic: "/src/assets/profilepic.jpg", // Default profile picture
    });

    const payload = {
        sessionID: localStorage.getItem("Authorization")
    }

    useEffect(() => {
        fetch("http://localhost:8000/v1/getUserData", {
            method: "POST",
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (!response.ok) {
                    alert("Failed to fetch User Data")
                    navigate("/login")
                    return
                }

                return response.json()
            })
            .then((data) => {
                console.log(data)
                setUser({
                    username: data.data.username,
                    email: data.data.email,
                    profilePic: "/src/assets/profilepic.jpg",
                });
            })
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("Authorization");
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-white font-outfit">
            <Navbar />
            <div className="flex">
                {/* Sidebar */}
                <div className="px-6 flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold mt-6 mb-6">Profile Menu</h2>
                    <Link
                        to="/profile/edit"
                        className="px-10 py-2 text-lg text-black bg-white rounded-sm hover:bg-amber-100 transition-all duration-300"
                    >
                        Edit Profile
                    </Link>

                    <Link
                        to="/profile/settings"
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
                    <Outlet /> {/* Child routes will render here */}
                </div>
            </div>
        </div>
    );
}

