const projects = [
    {
        title: "Redemption Metrics Dashboard",
        description: "Provides insights into customer engagement and redemption metrics.",
        tech: "Next.js, TailwindCSS, MongoDB",
        link: "https://github.com/yourusername/project",
        image: "/images/metrics-icon.png"
    },
    {
        title: "Favorites API",
        description: "API for storing and retrieving user favorite gift cards.",
        tech: "Node.js, Express, Lightspeed",
        link: "https://github.com/yourusername/project",
        image: "/images/gift-card-favorites.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6">
            <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project) => (
                    <div key={project.title} className="bg-white shadow rounded overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold">{project.title}</h3>
                            <p className="mt-2 text-gray-600">{project.description}</p>
                            <p className="mt-2 text-sm text-gray-500">{project.tech}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-block text-blue-600 hover:underline"
                            >
                                View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
