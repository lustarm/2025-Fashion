import Navbar from "../components/nav";
import { Link } from "react-router-dom";

export default function Home() {
    const images = [
        { src: "./src/assets/SideRickOwens.jpg", alt: "Rick Owens Shoes", description: "Rick Owens Handmade Leather Resole", name: "rick-owens-handmade-leather-resole" },
        { src: "./src/assets/Hellstar-Powered-By-The-Star-L-S-Tee-Black.jpg", alt: "Hellstar Tee", description: "Powered by The Star L/S Tee", name: "hellstar-powered-by-the-star-tee" },
        { src: "./src/assets/image3.jpg", alt: "Image 3", description: "Description of Image 3", name: "image3" },
        // Add more images as needed
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <Navbar />
            {/* Explore our collection */}
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">
                    Explore Our Collection
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <Link
                            key={index}
                            to={`/shop/${image.name}`}
                            className="relative block overflow-hidden bg-gray-800 rounded-lg shadow-lg hover:shadow-lg hover:shadow-sky-300 transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-white font-semibold text-lg">{image.alt}</p>
                                <p className="text-sm text-gray-400">{image.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center my-24">
                <Link to="/trends" className="space-x-10 text-xl hover:text-sky-300 transition-colors duration-300
                    rounded-lg px-2 py-2">
                    Explore more fashion trends here
                </Link>
            </div>
        </div>
    );
}
