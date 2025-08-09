import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 shadow">
            <Link href="/" className="font-bold text-lg">
                Kacey Johnson
            </Link>
            <div className="flex gap-6 items-center">
                <Link href="#about">About</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#projects">Projects</Link>
                <Link href="/blog">Blog</Link>
                <Link href="#contact">Contact</Link>
                <DarkModeToggle />
            </div>
        </nav>
    );
}
