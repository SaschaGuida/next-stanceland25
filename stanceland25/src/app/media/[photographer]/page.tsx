"use client";
import { useEffect, useState } from "react";

export default function PhotographerPage({ params }: { params: { photographer: string } }) {
    const [images, setImages] = useState<string[]>([]);
    
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch(`/api/photos/${params.photographer}`);
                const data = await res.json();
                if (res.ok) {
                    setImages(data.images);
                }
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, [params.photographer]);

    return (
        <div className="min-h-screen flex flex-col items-center text-white p-6">
            <h1 className="text-4xl font-bold text-[#ED4821] text-center">
                {decodeURIComponent(params.photographer)}'s Gallery
            </h1>
            <p className="text-gray-400 mt-4 text-center">
                A selection of {decodeURIComponent(params.photographer)}'s best shots.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full max-w-5xl">
                {images.length > 0 ? (
                    images.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No images found.</p>
                )}
            </div>
        </div>
    );
}
