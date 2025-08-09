const skills = [
    "JavaScript / TypeScript",
    "Next.js / React",
    "Node.js / Express",
    "TailwindCSS",
    "MongoDB / PostgreSQL",
    "AWS / Docker"
];

export default function Skills() {
    return (
        <section id="skills" className="bg-gray-50 py-16 px-6">
            <h2 className="text-2xl font-semibold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {skills.map((skill) => (
                    <div key={skill} className="bg-white shadow p-4 rounded text-center">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
