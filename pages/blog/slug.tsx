import fs from "fs";
    import path from "path";
    import matter from "gray-matter";
    import { remark } from "remark";
    import html from "remark-html";
    import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

    interface PostData {
        title: string;
        date: string;
        [key: string]: any;
    }

    export const getStaticPaths: GetStaticPaths = async () => {
        const postsDir = path.join(process.cwd(), "./posts");
        const filenames = fs.readdirSync(postsDir);
        const paths = filenames.map((filename) => ({
            params: { slug: filename.replace(".md", "") },
        }));
        return { paths, fallback: false };
    };

    export const getStaticProps: GetStaticProps<{
        data: PostData;
        contentHtml: string;
    }> = async ({ params }) => {
        const postsDir = path.join(process.cwd(), "posts");
        const filePath = path.join(postsDir, `${params?.slug}.md`);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return { props: { data: data as PostData, contentHtml } };
    };

    export default function Post({
        data,
        contentHtml,
    }: InferGetStaticPropsType<typeof getStaticProps>) {
        return (
            <article className="max-w-3xl mx-auto py-16 px-6">
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <p className="text-gray-500 text-sm">{data.date}</p>
                <div
                    className="prose dark:prose-invert mt-6"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </article>
        );
    }