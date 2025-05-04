import { MetadataRoute } from 'next'

// Replace with your actual production domain if it's not ayushbodade.vercel.app
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ayushbodade.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  // Add static routes here
  const staticRoutes = [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: '/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Add Chinese language variants (when you create these pages)
    {
      url: '/zh-cn',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: '/zh-cn/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/zh-cn/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ];

  // TODO: Add dynamic routes (e.g., blog posts) by fetching their paths
  // const dynamicRoutes = await fetchDynamicPaths(); 

  // Map the routes with full URLs
  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
 
  return routes;
}
