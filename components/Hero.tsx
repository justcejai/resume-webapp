export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-bold">Hi, I’m Kacey Johnson</h1>
            <p className="mt-4 text-lg text-gray-600">
                Software Engineer | Backend APIs | Full-Stack Development
            </p>
            <a
                href="#projects"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                View My Work
            </a>
        </section>
    );
}
