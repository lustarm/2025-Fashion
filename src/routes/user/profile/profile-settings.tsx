import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileSettings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [privacySetting, setPrivacySetting] = useState("Public");

    const navigate = useNavigate()

    const handleSaveSettings = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle saving settings here (e.g., API call to save the settings)
        alert("Settings saved!");
        navigate("/profile/")
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-white font-outfit p-6">
            <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
            <form onSubmit={handleSaveSettings} className="space-y-6">
                {/* Notifications */}
                <div className="flex items-center space-x-4">
                    <label className="text-lg">Enable Notifications</label>
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                        className="w-6 h-6 bg-zinc-800 border border-zinc-600 rounded-md"
                    />
                </div>

                {/* Privacy Setting */}
                <div>
                    <label className="block text-lg mb-2">Privacy Settings</label>
                    <select
                        value={privacySetting}
                        onChange={(e) => setPrivacySetting(e.target.value)}
                        className="w-full p-3 bg-zinc-800 text-white rounded-md"
                    >
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                        <option value="Friends">Friends Only</option>
                    </select>
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
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
}
