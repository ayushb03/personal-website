import { BlogPosts } from '../../components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development and more.',
}

export default function BlogPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Blog
      </h1>
      <p className="mb-8">
        I write about software development, tech trends, and my personal experiences.
      </p>
      <BlogPosts />
    </section>
  )
} 