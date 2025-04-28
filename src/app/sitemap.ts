export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

  // Sample blog posts from our data
  const posts = [
    {
      slug: 'getting-started-with-nextjs',
      publishedAt: '2023-10-15',
    },
    {
      slug: 'power-of-typescript',
      publishedAt: '2023-11-02',
    },
    {
      slug: 'building-with-tailwind',
      publishedAt: '2023-12-10',
    },
  ]

  let blogs = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  let routes = ['', '/blog', '/projects', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
} 