import Link from "next/link";
import Image from "next/image";

const photographers = [
    {
        name: "Simone Carminati",
        image: "/img/media/mediaprofile/carminati_profilo1.jpg",
        description: "Specialized in automotive photography with a creative touch.",
        tags: ["Automotive", "Creative", "Studio"],
        link: "/media/simone-carminati",
    },
    {
        name: "Peter Mosoni",
        image: "/img/media/mediaprofile/peter_mosoni.jpg",
        description: "Expert in event photography, capturing unforgettable moments.",
        tags: ["Events", "Portrait", "Outdoor"],
        link: "/media/peter-mosoni",
    },
    {
        name: "Fabio Lena",
        image: "/img/media/mediaprofile/fabio_lena.jpg",
        description: "Fashion and commercial photographer with years of experience.",
        tags: ["Fashion", "Commercial", "Studio"],
        link: "/media/fabio-lena",
    },
    {
        name: "Nicolas Lorenzelli",
        image: "/img/media/mediaprofile/nicolas_lorenzelli.jpg",
        description: "Nature and travel photography specialist with stunning visuals.",
        tags: ["Nature", "Travel", "Adventure"],
        link: "/media/nicolas-lorenzelli",
    },
    {
        name: "Yuta Kajigaya",
        image: "/img/media/mediaprofile/yuta _kajigaya.jpg",
        description: "High-speed sports photography with an artistic perspective.",
        tags: ["Sports", "Action", "Dynamic"],
        link: "/media/yuta-kajigaya",
    },
    {
        name: "Tristan Thiex",
        image: "/img/media/mediaprofile/tristan.jpeg",
        description: "High-speed sports photography with an artistic perspective.",
        tags: ["Sports", "Action", "Dynamic"],
        link: "/media/tristan-thiex",
    },
    {
        name: "Massimo Maceroni",
        image: "/img/media/mediaprofile/maceroni.jpg",
        description: "High-speed sports photography with an artistic perspective.",
        tags: ["Sports", "Action", "Dynamic"],
        link: "/media/massimo-maceroni",
    },
    {
        name: "Radu Alagel",
        image: "/img/media/mediaprofile/radu_alagel.jpg",
        description: "High-speed sports photography with an artistic perspective.",
        tags: ["Sports", "Action", "Dynamic"],
        link: "/media/radu-alagel",
    },
];

export default function MediaPage() {
    return (
        <section className="py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 text-[#ED4821]">
                    Meet Our Photographers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photographers.map((photographer, index) => (
                        <div key={index} className="rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <Image
                                src={photographer.image}
                                width={300}
                                height={200}
                                alt={photographer.name}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold">{photographer.name}</h3>
                            <p className="text-gray-400 text-center mt-2">{photographer.description}</p>
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {photographer.tags.map((tag, i) => (
                                    <span key={i} className="bg-[#ED4821] text-white text-sm px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={photographer.link ?? "#"} className="mt-5 px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition">
                                View Profile →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
