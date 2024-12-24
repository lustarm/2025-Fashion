import Navbar from "../components/nav";
import { Link } from "react-router-dom";

export default function Home() {
    // Grab these from backend etc
    const images = [
        { src: "/src/assets/SideRickOwens.jpg", alt: "Rick Owens Shoes", description: "Rick Owens Handmade Leather Resole", name: "rick-owens-handmade-leather-resole" },
        { src: "/src/assets/Hellstar-Powered-By-The-Star-L-S-Tee-Black.jpg", alt: "Hellstar Tee", description: "Powered by The Star L/S Tee", name: "hellstar-powered-by-the-star-tee" },
        { src: "/src/assets/Pink-Hoodie.jpg", alt: "Sp5der Apparel", description: "Young Thugs Clothing Line Sp5der Apparel", name: "Pink-Sp5der-Apparel-Hoodie" },
    ];

    return (
        <div className="min-h-screen bg-zinc-900 text-white font-outfit">
            <Navbar />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">
                    Explore Our Collection
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <Link
                            key={index}
                            to={`/shop/${image.name}`}
                            className="relative block overflow-hidden bg-zinc-100 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <p className="text-black font-semibold text-lg">{image.alt}</p>
                                <p className="text-sm text-zinc-600">{image.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
