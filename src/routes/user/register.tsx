import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Navbar from "../../components/nav";

export default function Register() {
    // Navigate hook
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")
    const [isError, setIsError] = useState(false)

    const validateEmail = (value: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        setEmailError(!emailRegex.test(value))
    };

    const validatePassword = (value: string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{8,}$/;
        setPasswordError(!passwordRegex.test(value));
    };

    const handleEmailChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    }

    const handlePasswordChange = (e: { target: { value: any } }) => {
        const value = e.target.value;
        setPassword(e.target.value);
        validatePassword(value);
    }

    const handleUsernameChange = (e: { target: { value: any } }) => {
        setUsername(e.target.value)
    }

    const handleRegister = async () => {
        // Define the payload
        const payload = {
            email,
            username,
            password,
        };

        try {
            // Make the POST request to the backend
            const response = await fetch("http://localhost:8000/v1/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            // Handle the response
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("Authorization", data.message)
                navigate("/shop/")
            } else {
                const errorData = await response.json();
                console.error("Registration failed:", errorData);
                // Set error
                setIsError(true)
                setErrorMessage(errorData.message)
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setIsError(true)
            setErrorMessage("An error has occured please try again later")
        }
    };

    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="text-2xl font-semibold text-zinc-900">Register</h2>
                        {isError && <span className="text-sm font-semibold text-red-600">{errorMessage}</span>}
                    </div>

                    {/* Inputs */}
                    <div className="">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className={`mb-5 w-full px-4 py-2 border ${emailError ? "mb-0 border-red-500" : "border-zinc-300"
                                } rounded-lg focus:outline-none`}
                        />
                        {emailError && <p className="text-red-500 text-xs mb-1">Invalid email address.</p>}

                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="mb-5 w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`w-full px-4 py-2 border ${passwordError ? "border-red-500" : "border-zinc-300"
                                } rounded-lg focus:outline-none`}
                        />
                        {passwordError && (
                            <p className="text-red-500 text-xs">
                                Password must be at least 8 characters, include an uppercase letter, and a special character.
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full mt-6 bg-zinc-900 text-white py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors"
                        disabled={emailError || passwordError}
                        onClick={handleRegister}
                    >
                        Register
                    </button>

                    {/* Login Link */}
                    <Link
                        to="/Login"
                        className="text-zinc-500 text-xs pt-3 hover:text-amber-400 transition-colors duration-300"
                    >
                        Already a member? Login here.
                    </Link>
                </div>
            </div>
        </div>
    );
}
