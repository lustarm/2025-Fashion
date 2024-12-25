import { useEffect, useState } from "react";

export default function VerifyToken() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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

    return isLoggedIn
}