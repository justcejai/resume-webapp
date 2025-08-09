import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    [key: string]: any;
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
    const postsDir = path.join(process.cwd(), "./posts");
    const filenames = fs.readdirSync(postsDir);

    const posts: Post[] = filenames.map((filename) => {
        const filePath = path.join(postsDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);

        return {
            slug: filename.replace(".md", ""),
            title: data.title ?? "Untitled",
            date: data.date ?? "",
            excerpt: data.excerpt ?? "",
            ...data
        };
    });

    return { props: { posts } };
};

export default function Blog({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <section className="max-w-3xl mx-auto py-16 px-6">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug} className="mb-6">
                        <Link href={`/blog/${post.slug}`} className="text-xl text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}