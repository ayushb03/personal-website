import { BlogPosts } from '../../components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development and more.',
}

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          I write about software development, AI research, and my personal experiences.
        </p>
      </div>
      
      <BlogPosts />
    </div>
  )
} 