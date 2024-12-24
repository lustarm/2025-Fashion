import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/nav";
import VerifyToken from "../../util/verifyToken";

export default function Login() {

    // Navigate hook
    const navigate = useNavigate()

    const isLoggedIn = VerifyToken()

    if(isLoggedIn) {
        navigate("/profile")
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")
    const [isError, setIsError] = useState(false)

    const handleLogin = async () => {

        const payload = {
            username,
            password
        }

        try {
            const response = await fetch("http://localhost:8000/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                const errorData = await response.json()
                console.error(errorData)

                setIsError(true)
                setErrorMessage(errorData.message)
                return
            }

            const data = await response.json()
            localStorage.setItem("Authorization", data.message)
            navigate("/profile/")
            return

        } catch (error) {
            setIsError(true)
            setErrorMessage("An error has occured please try again later")
        }
    }

    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="text-2xl font-semibold text-zinc-900">Login</h2>
                        {isError && <span className="text-sm font-semibold text-red-600">{errorMessage}</span>}
                    </div>

                    {/* Inputs */}
                    <div className="space-y-5">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full mt-6 bg-zinc-900 text-white py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors"
                        onClick={handleLogin}
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
