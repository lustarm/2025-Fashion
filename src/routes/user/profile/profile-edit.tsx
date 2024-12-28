import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileEdit() {
    const [username, setUsername] = useState("...");
    const [email, setEmail] = useState("...");

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here (e.g., call API to save the data)
        navigate("/profile/")
    };

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
                    return
                }

                return response.json()
            })
            .then((data) => {
                console.log(data)
                setUsername(data.data.username)
                setEmail(data.data.email)
            })
    }, []);

    return (
        <div className="min-h-screen bg-zinc-900 text-white font-outfit p-6">
            <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 bg-zinc-800 text-white rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-lg">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-zinc-800 text-white rounded-md"
                    />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <Link
                        to="/profile"
                        className="bg-zinc-700 text-white px-6 py-2 rounded-lg hover:bg-zinc-600 transition-all duration-300"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="bg-amber-100 text-black px-6 py-2 rounded-lg hover:bg-amber-200 transition-all duration-300"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
