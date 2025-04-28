import Link from 'next/link'

type Post = {
  title: string
  slug: string
  date: string
  description: string
}

// Sample posts data (in production, this would likely come from a CMS or API)
const posts: Post[] = [
  {
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    date: '2023-10-15',
    description: 'A comprehensive guide to starting your first Next.js project from scratch.',
  },
  {
    title: 'The Power of TypeScript',
    slug: 'power-of-typescript',
    date: '2023-11-02',
    description: 'Explore how TypeScript can help you write more maintainable code.',
  },
  {
    title: 'Building with Tailwind CSS',
    slug: 'building-with-tailwind',
    date: '2023-12-10',
    description: 'Learn how to use Tailwind CSS to rapidly build beautiful user interfaces.',
  },
]

export function BlogPosts() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-medium mb-2">Recent Posts</h2>
      {posts.map((post) => (
        <Link 
          key={post.slug}
          href={`/blog/${post.slug}`} 
          className="group flex flex-col space-y-1 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium group-hover:text-blue-500 transition-colors">
              {post.title}
            </h3>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {post.date}
            </span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            {post.description}
          </p>
        </Link>
      ))}
    </div>
  )
} 