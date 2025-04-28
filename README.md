# Ayush Bodade Personal Website

A Next.js-based personal website showcasing Ayush's portfolio, projects, and blog.

## SEO Optimization Guide

This website has been optimized for search engines with the following features:

### Core SEO Elements

- **Metadata**: Each page has customized metadata including title, description, and Open Graph tags
- **Structured Data**: JSON-LD structured data for better search result displays
- **Sitemap**: Dynamic sitemap generation at `/sitemap.xml`
- **Robots.txt**: Customized robots.txt to guide search engine crawlers
- **Canonical URLs**: Proper canonical URL implementation to avoid duplicate content issues

### Image Optimization

- Using Next.js Image component with proper sizing and formats
- Alt text for all images for better accessibility and SEO

### Page Speed Optimization

- Font optimization with display swap
- Image optimization and lazy loading
- Proper caching headers for static assets
- Minified CSS and JS

## Maintaining SEO

### Adding New Pages

When adding new pages:

1. Use the `generatePageMetadata` function from `src/components/seo.tsx`
2. Add the page to the sitemap in `src/app/sitemap.ts`
3. Include proper structured data if applicable

Example:

```tsx
import { Metadata } from "next";
import { generatePageMetadata } from "../../components/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Page Title | Ayush Bodade",
  description: "Page description with keywords and context",
  path: "/page-path",
});
```

### Adding Blog Posts

When adding new blog posts:

1. Create a new directory under `/blog/[slug]`
2. Use the `ArticleStructuredData` component
3. Follow the existing pattern for SEO metadata

## Performance Monitoring

- Use Vercel Analytics to monitor page performance
- Regularly check Google Search Console for issues and ranking
- Test with Lighthouse and PageSpeed Insights

## Technologies Used

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel Analytics and Speed Insights