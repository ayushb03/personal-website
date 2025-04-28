import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  date: string;
  description: string;
};

// Sample posts data (in production, this would likely come from a CMS or API)
const posts: Post[] = [
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2023-10-15",
    description:
      "A comprehensive guide to starting your first Next.js project from scratch.",
  },
  {
    title: "The Power of TypeScript",
    slug: "power-of-typescript",
    date: "2023-11-02",
    description:
      "Explore how TypeScript can help you write more maintainable code.",
  },
  {
    title: "Building with Tailwind CSS",
    slug: "building-with-tailwind",
    date: "2023-12-10",
    description:
      "Learn how to use Tailwind CSS to rapidly build beautiful user interfaces.",
  },
];

export function BlogPosts() {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-2">
            <h3 className="font-medium text-lg">{post.title}</h3>
            <time className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">
              {post.date}
            </time>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {post.description}
          </p>
          <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
            Read more →
          </div>
        </Link>
      ))}
    </div>
  );
}
